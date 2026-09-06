import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // TEMP: Simple stub. Replace with real lookup + password check using Prisma.
        if (!credentials.email) return null
        return { id: credentials.email, name: credentials.email, email: credentials.email }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role || 'student'
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role || 'student'
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})
