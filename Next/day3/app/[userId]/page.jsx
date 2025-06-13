"use client"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import styles from "@/app/[userId]/UserPage.module.css"

export default function UserPage() {
  const { userId } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    if (userId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }
  }, [userId])

  return (
    <div className={styles.user}>
      <h1>
        {user.id}. {user.name}
      </h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
    </div>
  )
}
