import { db } from "@/db/client"
import nodePkg from "@remix-run/node"
const { json } = nodePkg
import type { ActionFunctionArgs } from "@remix-run/node"
import { z } from "zod"
import { items } from '@/db/schema'

const addItemSchema = z.object({
  uuid: z.string(),
})

export async function action({ request }: ActionFunctionArgs) {
  if (request.method === `POST`) {
    const body = await request.json()

    const { uuid } = addItemSchema.parse(body)
    const result = await db.insert(items).values({ id: uuid }).returning()
    
    return json({ id: result[0].id })
  }

  if (request.method === `DELETE`) {
    await db.delete(items)

    return `ok`
  }
}
