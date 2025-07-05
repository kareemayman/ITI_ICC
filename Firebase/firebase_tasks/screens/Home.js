import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useEffect, useState } from "react"
import Icon from "react-native-vector-icons/Entypo"
import { db, auth } from "../firebase"
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import FlashMessage, { showMessage } from "react-native-flash-message"
import Post from "../components/Post"

export default function Home() {
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState([])
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editPostContent, setEditPostContent] = useState("")
  const [editPostId, setEditPostId] = useState(null)
  const [commentModalVisible, setCommentModalVisible] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [commentPostId, setCommentPostId] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("updatedAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPosts(postsArr)
    })

    return () => unsubscribe()
  }, [])

  function createPost() {
    const user = auth.currentUser
    const userDocRef = doc(db, "users", user.uid)

    getDoc(userDocRef)
      .then((docSnap) => {
        const username = docSnap.exists() ? docSnap.data().username : user.email || user.uid
        return addDoc(collection(db, "posts"), {
          content: postContent,
          uid: user.uid,
          updatedAt: serverTimestamp(),
          author: username,
        })
      })
      .then(() => {
        showMessage({
          message: "Post created!",
          type: "success",
        })
      })
      .catch((error) => {
        showMessage({
          message: "Error creating post: " + error.message,
          type: "danger",
        })
      })
  }

  function handleEdit(post) {
    setEditPostId(post.id)
    setEditPostContent(post.content)
    setEditModalVisible(true)
  }

  function handleDelete(post) {
    deleteDoc(doc(db, "posts", post.id))
      .then(() => {
        showMessage({
          message: "Post deleted!",
          type: "success",
        })
      })
      .catch((error) => {
        showMessage({
          message: "Error deleting post: " + error.message,
          type: "danger",
        })
      })
  }

  async function handleLike(post) {
    const user = auth.currentUser
    if (!user) return

    const likeRef = doc(db, "posts", post.id, "likes", user.uid)
    const likeSnap = await getDoc(likeRef)
    if (likeSnap.exists()) {
      // Unlike: remove like doc
      await deleteDoc(likeRef)
    } else {
      // Like: create like doc
      await setDoc(likeRef, {
        uid: user.uid,
        createdAt: serverTimestamp(),
      })
    }
  }

  function handleComment(post) {
    setCommentPostId(post.id)
    setCommentText("")
    setCommentModalVisible(true)

    // Fetch comments for this post in real-time
    const commentsCol = collection(db, "posts", post.id, "comments")
    const q = query(commentsCol, orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setComments(commentsArr)
    })

    // Cleanup listener when modal closes
    return () => unsubscribe()
  }

  async function submitComment() {
    const user = auth.currentUser
    if (!user || !commentText.trim()) return

    const commentsCol = collection(db, "posts", commentPostId, "comments")
    await addDoc(commentsCol, {
      uid: user.uid,
      text: commentText,
      createdAt: serverTimestamp(),
      author: user.displayName || user.email || user.uid,
    })
    setCommentModalVisible(false)
    setCommentText("")
    setCommentPostId(null)
  }

  function handleUpdatePost() {
    if (!editPostId) return
    const postRef = doc(db, "posts", editPostId)
    updateDoc(postRef, {
      content: editPostContent,
      updatedAt: serverTimestamp(),
    })
      .then(() => {
        showMessage({
          message: "Post updated!",
          type: "success",
        })
        setEditModalVisible(false)
        setEditPostId(null)
        setEditPostContent("")
      })
      .catch((error) => {
        showMessage({
          message: "Error updating post: " + error.message,
          type: "danger",
        })
      })
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Post
            post={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onLike={handleLike}
            onComment={handleComment}
          />
        )}
      />
      {/* Create Post Modal */}
      <Modal
        visible={showCreatePost}
        transparent
        animationType="fade"
        onRequestClose={() => setShowCreatePost(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Create New Post</Text>
            <TextInput
              style={styles.input}
              placeholder="What's on your mind?"
              value={postContent}
              onChangeText={setPostContent}
              multiline
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setShowCreatePost(false)}
              >
                <Text>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.postButton]}
                onPress={() => {
                  createPost()
                  setShowCreatePost(false)
                  setPostContent("")
                }}
              >
                <Text>Post</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Edit Post Modal */}
      <Modal
        visible={editModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Edit Post</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit your post..."
              value={editPostContent}
              onChangeText={setEditPostContent}
              multiline
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setEditModalVisible(false)}
              >
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.postButton]} onPress={handleUpdatePost}>
                <Text>Update</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* Comment Modal */}
       <Modal
        visible={commentModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setCommentModalVisible(false)
          setComments([])
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Comments</Text>
            <FlatList
              data={comments}
              keyExtractor={item => item.id}
              ListEmptyComponent={<Text style={{ color: "#888" }}>No comments yet.</Text>}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 12 }}>
                  <Text style={{ fontWeight: "bold" }}>{item.author}</Text>
                  <Text>{item.text}</Text>
                  <Text style={{ fontSize: 11, color: "#888" }}>
                    {item.createdAt?.seconds
                      ? new Date(item.createdAt.seconds * 1000).toLocaleString()
                      : ""}
                  </Text>
                </View>
              )}
              style={{ maxHeight: 200, marginBottom: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Write a comment..."
              value={commentText}
              onChangeText={setCommentText}
              multiline
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setCommentModalVisible(false)
                  setComments([])
                }}
              >
                <Text>Close</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.postButton]} onPress={submitComment}>
                <Text>Comment</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.addPostButton}
        onPress={() => {
          setShowCreatePost(true)
        }}
      >
        <View>
          <Icon name="plus" size={30} color="black" />
        </View>
      </Pressable>
      <FlashMessage position="center" />
    </View>
  )
}

const styles = StyleSheet.create({
  addPostButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#fbc465",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    minHeight: 60,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: "#eee",
  },
  postButton: {
    backgroundColor: "#fbc465",
  },
})
