import { sql } from 'drizzle-orm'
import { pgTable, uuid } from 'drizzle-orm/pg-core'

export const items = pgTable('item', {
  id: uuid('id').primaryKey().default(sql`uuid_generate_v4()`),
})