import { StyleSheet, Text, View, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import Icon from "react-native-vector-icons/Entypo"
import { auth, db } from "../firebase"
import { collection, onSnapshot } from "firebase/firestore"

export default function Post({ post, onEdit, onDelete, onLike, onComment }) {
  const [likesCount, setLikesCount] = useState(0)
  const [commentsCount, setCommentsCount] = useState(0)

  useEffect(() => {
    // Listen for likes count
    const likesCol = collection(db, "posts", post.id, "likes")
    const unsubscribeLikes = onSnapshot(likesCol, (snapshot) => {
      setLikesCount(snapshot.size)
    })

    // Listen for comments count
    const commentsCol = collection(db, "posts", post.id, "comments")
    const unsubscribeComments = onSnapshot(commentsCol, (snapshot) => {
      setCommentsCount(snapshot.size)
    })

    // Cleanup
    return () => {
      unsubscribeLikes()
      unsubscribeComments()
    }
  }, [post.id])

  const user = auth.currentUser
  const isOwner = user && user.uid === post.uid

  // Format date
  let dateStr = ""
  if (post.updatedAt && post.updatedAt.seconds) {
    const date = new Date(post.updatedAt.seconds * 1000)
    dateStr = date.toLocaleString()
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.date}>{dateStr}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.actions}>
        <Pressable style={styles.iconBtn} onPress={() => onLike && onLike(post)}>
          <Icon name="heart" size={20} color="#e74c3c" />
          <Text style={styles.counter}>{likesCount}</Text>
        </Pressable>
        <Pressable style={styles.iconBtn} onPress={() => onComment && onComment(post)}>
          <Icon name="chat" size={20} color="#3498db" />
          <Text style={styles.counter}>{commentsCount}</Text>
        </Pressable>
        {isOwner && (
          <View style={styles.editDelete}>
            <Pressable style={styles.editBtn} onPress={() => onEdit && onEdit(post)}>
              <Icon name="edit" size={18} color="#fbc465" />
              {/* <Text style={styles.editText}>Edit</Text> */}
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={() => onDelete && onDelete(post)}>
              <Icon name="trash" size={18} color="#e74c3c" />
              {/* <Text style={styles.deleteText}>Delete</Text> */}
            </Pressable>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  author: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  content: {
    fontSize: 15,
    color: "#333",
    marginBottom: 12,
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 18,
  },
  counter: {
    marginLeft: 4,
    fontSize: 15,
    color: "#444",
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  editText: {
    marginLeft: 4,
    color: "#fbc465",
    fontWeight: "bold",
    fontSize: 14,
  },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteText: {
    marginLeft: 4,
    color: "#e74c3c",
    fontWeight: "bold",
    fontSize: 14,
  },
  editDelete: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
})
