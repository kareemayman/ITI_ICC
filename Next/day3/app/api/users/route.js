import { promises as fs } from "fs"
import path from "path"

const dataFile = path.join(process.cwd(), "data", "users.json")

export async function GET(req) {
  const fileData = await fs.readFile(dataFile, "utf-8")
  const users = JSON.parse(fileData)
  return new Response(JSON.stringify(users), { status: 200 })
}

export async function POST(req) {
  const { name, username, email } = await req.json()
  const fileData = await fs.readFile(dataFile, "utf-8")
  const users = JSON.parse(fileData)
  const newUser = { id: users.length + 1, name, username, email }
  const updatedUsers = [...users, newUser]
  await fs.writeFile(dataFile, JSON.stringify(updatedUsers, null, 2))
  return new Response(JSON.stringify(updatedUsers), { status: 200 })
}
