"use client"
import React, { useEffect, useState } from "react"
import styles from "./page.module.css"
import Link from "next/link"

export default function page() {
  const [users, setUsers] = useState([])

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [updateName, setUpdateName] = useState("")
  const [updateUsername, setUpdateUsername] = useState("")
  const [updateEmail, setUpdateEmail] = useState("")
  const [updateId, setUpdateId] = useState("")

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  function deleteUser(id) {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }

  function handleAddUser(e) {
    e.preventDefault()
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({ name, username, email }),
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))

    setName("")
    setUsername("")
    setEmail("")
  }

  function updateUser(id) {
    setShowUpdateForm(true)

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateName(data.name)
        setUpdateUsername(data.username)
        setUpdateEmail(data.email)
        setUpdateId(data.id)
      })
  }

  function handleUpdateRequest(e) {
    e.preventDefault()

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${updateId}`, {
      method: "PUT",
      body: JSON.stringify({ name: updateName, username: updateUsername, email: updateEmail }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setShowUpdateForm(false)
      })
  }

  return (
    <div className={`container ${styles.page}`}>
      <h1>Users</h1>
      <form className={styles.addUser} onSubmit={(e) => handleAddUser(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <div className={styles.users}>
        {users?.length > 0 &&
          users.map((user) => (
            <div className={styles.user} key={user.id}>
              <h2>
                {user.id}. {user.name}
              </h2>
              <Link href={`/${user.id}`} className={styles.link}>
                Details
              </Link>
              <button onClick={() => deleteUser(user.id)} className={styles.deleteButton}>
                Delete
              </button>
              <button onClick={() => updateUser(user.id)} className={styles.updateButton}>Update</button>
            </div>
          ))}
      </div>

      {showUpdateForm && <div className={styles.updateUserOverlay}>
        <div className={styles.updateUserModal}>
          <h2>Update User</h2>
          <form onSubmit={(e) => handleUpdateRequest(e)}>
            <input type="text" placeholder="Name" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
            <input type="text" placeholder="Username" value={updateUsername} onChange={(e) => setUpdateUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} />
            <button onClick={() => setShowUpdateForm(false)}>Cancel</button>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>}
    </div>
  )
}
