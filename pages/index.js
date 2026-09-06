import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Academic Help</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Academic Help — Prototype</h1>
        <p className="mb-4">Students can post requests for help. Helpers can browse requests and donate.</p>
        <div className="space-x-4">
          <Link href="/student">
            <a className="px-4 py-2 bg-blue-600 text-white rounded">Student portal</a>
          </Link>
          <Link href="/helper">
            <a className="px-4 py-2 bg-green-600 text-white rounded">Helper portal</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
