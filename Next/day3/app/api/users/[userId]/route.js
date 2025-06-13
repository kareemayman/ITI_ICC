import { promises as fs } from "fs"
import path from "path"

const dataFile = path.join(process.cwd(), "data", "users.json")

export async function GET(req, { params }) {
  const { userId } = await params
  const fileData = await fs.readFile(dataFile, "utf-8")
  const users = JSON.parse(fileData)
  const user = users.find((user) => user.id == userId)
  return new Response(JSON.stringify(user), { status: 200 })
}

export async function DELETE(req, { params }) {
  const { userId } = await params
  const fileData = await fs.readFile(dataFile, "utf-8")
  let users = JSON.parse(fileData)
  let filteredUsers = users.filter((user) => user.id != userId)
  await fs.writeFile(dataFile, JSON.stringify(filteredUsers, null, 2))
  return new Response(JSON.stringify(filteredUsers), { status: 200 })
}

export async function PUT(req, { params }) {
  const { userId } = await params
  const { name, username, email } = await req.json()
  const fileData = await fs.readFile(dataFile, "utf-8")
  let users = JSON.parse(fileData)
  let updatedUsers = users.map((user) => (user.id == userId ? { ...user, name, username, email } : user))
  await fs.writeFile(dataFile, JSON.stringify(updatedUsers, null, 2))
  return new Response(JSON.stringify(updatedUsers), { status: 200 })
}