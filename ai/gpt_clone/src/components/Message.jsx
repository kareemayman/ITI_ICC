import React from "react"
import "../styles/Message.css"

const Message = ({ message, isUser }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  }

  const formatMessageContent = (content) => {
    // Simple markdown-like formatting for code blocks and bold text
    return content
      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>")
  }

  return (
    <div className={`message ${isUser ? "user-message" : "assistant-message"}`}>
      <div className="message-content">
        {message.type === "image" && message.imageUrl ? (
          <img
            src={message.imageUrl}
            alt="Generated"
            style={{ maxWidth: "40%", borderRadius: "8px" }}
          />
        ) : (
          <>
            <div className="message-avatar">{isUser ? "👤" : "🤖"}</div>
            <div className="message-body">
              <div className="message-header">
                <span className="message-author">{isUser ? "You" : "ChatGPT"}</span>
                <span className="message-timestamp">{formatTimestamp(message.timestamp)}</span>
              </div>
              <div
                className="message-text"
                dangerouslySetInnerHTML={{
                  __html: formatMessageContent(message.content),
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Message
