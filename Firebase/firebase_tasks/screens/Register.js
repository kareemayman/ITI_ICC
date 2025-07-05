import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native"
import React, { useState } from "react"
import Icon from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../firebase"
import { addDoc, doc, setDoc } from "firebase/firestore"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")

  const navigation = useNavigation()

  function handleRegister() {
    // Registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    } else if (password.length < 6 || confirmPassword.length < 6) {
      alert("Password must be at least 6 characters long!")
      return
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address!")
      return
    } else if (!email.includes(".")) {
      alert("Please enter a valid email address!")
      return
    } else if (password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please fill in all fields!")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        alert("Registration successful!")
        return user
      })
      .then((user) => {
        const uid = user.uid
        const docRef = doc(db, "users", uid)
        setDoc(docRef, {
          uid: uid,
          email: email,
          username: username,
        })
      })
      .then(() => navigation.navigate("Login"))
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(`Error: ${errorMessage}`)
      })
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Icon name="adduser" size={90} color="#fbc465" style={{ marginBottom: 40 }} />

        <Text style={{ fontSize: 24, fontWeight: 600, letterSpacing: 1.1 }}>Create an account</Text>
        <Text style={{ fontSize: 18, marginTop: 5, marginBottom: 20 }}>
          Please fill in the details below
        </Text>
        <Text style={styles.label}>Email Address: </Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Please enter your email"
          onChangeText={setEmail}
          value={email}
        />

        <Text style={styles.label}>Username: </Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your username"
          onChangeText={setUsername}
          value={username}
        />

        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="Please enter your password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          textContentType="password"
          returnKeyType="done"
        />

        <Text style={styles.label}>Confirm Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="Please confirm your password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          textContentType="password"
          returnKeyType="done"
        />

        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={{ fontWeight: "bold" }}>Register</Text>
        </Pressable>

        <View style={styles.loginLink}>
          <Text style={{ color: "#000" }}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#af8a2e", fontWeight: "bold" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 5,
    fontWeight: "bold",
  },
  registerButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#fbc465",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  loginLink: {
    flexDirection: "row",
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
})
