# Corrected-repository — Academic Help

This repository hosts the Academic Help website: a platform where students can post requests for assistance and helpers can donate money or pledge support.

This branch (feature/website) contains the initial Next.js + Tailwind scaffold, a simple Prisma schema (SQLite prototype), and basic API routes to start building the application.

Local development

1. Install dependencies: npm install
2. Create a .env file with the following variables (example):

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change_this_to_a_secure_random_value
DATABASE_URL="file:./dev.db"
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx

3. Initialize Prisma and migrate: npx prisma migrate dev --name init
4. Run the dev server: npm run dev

Notes
- This is an initial scaffold. Next steps: wire NextAuth to a proper adapter (Prisma), implement secure uploads, and integrate Stripe checkout in test mode.
