import { drizzle } from "drizzle-orm/node-postgres";

import pkg from 'pg';
const {Client} = pkg;

const client = new Client({
  connectionString: process.env.DB_URL,
});


await client.connect();
export const db = drizzle(client);