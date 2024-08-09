import { defineConfig } from 'drizzle-kit'

const dbUrl: string | undefined = process.env.DB_URL

if (!dbUrl) {
  throw new Error('DB_URL environment variable is not set')
}

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
  verbose: true,
  strict: true,
})