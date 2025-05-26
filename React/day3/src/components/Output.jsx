import React, { useEffect, useState } from 'react'

export default function Output({ parentFormData, submitCount }) {

  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (submitCount) {
      setShowOutput(true)
    }
  }, [submitCount])

  return (
    showOutput && <div className="output">
      <h2>Output</h2>
      <p><strong>First Name:</strong> {parentFormData['first-name']}</p>
      <p><strong>Last Name:</strong> {parentFormData['last-name']}</p>
      <p><strong>Email:</strong> {parentFormData.email}</p>
      <p><strong>Age:</strong> {parentFormData.age}</p>
      <p><strong>Message:</strong> {parentFormData.message}</p>
      <button onClick={e => setShowOutput(false)}>Close</button>
    </div>
  )
}
