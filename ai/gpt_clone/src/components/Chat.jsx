import React, { useState, useEffect, useRef } from "react"
import Message from "./Message"
import ChatInput from "./ChatInput"
import SessionsSidebar from "./SessionsSidebar"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { sendMessageToGemini } from "../services/gemini"
import { makeImagenRequest } from "../services/imagen"
import "../styles/Chat.css"

const Chat = () => {
  const [sessions, setSessions] = useLocalStorage("chatSessions", [])
  const [currentSessionId, setCurrentSessionId] = useState(null)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const messagesEndRef = useRef(null)
  const [imageGen, setImageGen] = useState(false)

  // Initialize with a new session if none exists
  useEffect(() => {
    if (sessions.length === 0) {
      createNewSession()
    } else {
      // Load the most recent session
      const latestSession = sessions[sessions.length - 1]
      setCurrentSessionId(latestSession.id)
      setMessages(latestSession.messages)
    }
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Save current session whenever messages change
  useEffect(() => {
    if (currentSessionId && messages.length > 0) {
      setSessions((prev) =>
        prev.map((session) =>
          session.id === currentSessionId
            ? { ...session, messages, updatedAt: Date.now() }
            : session
        )
      )
    }
  }, [messages, currentSessionId])

  const createNewSession = () => {
    const newSession = {
      id: Date.now().toString(),
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    setSessions((prev) => [...prev, newSession])
    setCurrentSessionId(newSession.id)
    setMessages([])
    setIsSidebarOpen(false)
  }

  const selectSession = (sessionId) => {
    const session = sessions.find((s) => s.id === sessionId)
    if (session) {
      setCurrentSessionId(sessionId)
      setMessages(session.messages)
      setIsSidebarOpen(false)
    }
  }

  const sendMessage = async (content) => {
    const userMessage = {
      role: "user",
      content,
      timestamp: Date.now(),
    }

    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setIsLoading(true)

    if (imageGen) {
      try {
        const result = await makeImagenRequest(content)
        const imageUrl = result?.output?.[0]
        const assistantMessage = {
          role: "assistant",
          content: imageUrl
            ? `<img src="${imageUrl}" alt="Generated" style="max-width:100%;border-radius:8px;" />`
            : "Image generated.",
          timestamp: Date.now(),
          type: "image",
          imageUrl, // keep the URL for easier rendering
        }
        setMessages((prev) => [...prev, assistantMessage])
      } catch (error) {
        const errorMessage = {
          role: "assistant",
          content: error.message || "Sorry, I encountered an error. Please try again.",
          timestamp: Date.now(),
        }
        setMessages((prev) => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
      return
    }

    try {
      const response = await sendMessageToGemini(newMessages)

      const assistantMessage = {
        role: "assistant",
        content: response,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        content: error.message || "Sorry, I encountered an error. Please try again.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chat-container">
      <SessionsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sessions={sessions}
        currentSessionId={currentSessionId}
        onSelectSession={selectSession}
        onNewSession={createNewSession}
      />

      <div className="chat-main">
        <div className="chat-header">
          <button className="sessions-toggle" onClick={() => setIsSidebarOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            Sessions
          </button>

          <div className={`header-actions ${imageGen ? "image-gen-active" : ""}`}>
            <button
              className="action-button"
              title="Text to Image"
              onClick={() => setImageGen(!imageGen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-welcome">
              <h1>ChatGPT Clone</h1>
              <p>How can I help you today?</p>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <Message key={index} message={message} isUser={message.role === "user"} />
              ))}
              {isLoading && (
                <div className="loading-message">
                  <div className="message assistant-message">
                    <div className="message-content">
                      <div className="message-avatar">🤖</div>
                      <div className="message-body">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default Chat
