import React, { useEffect } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export default function Logout({ navigation }) {
  useEffect(() => {
    signOut(auth).finally(() => {
      navigation.replace("Login")
    })
  }, [])

  return null
}