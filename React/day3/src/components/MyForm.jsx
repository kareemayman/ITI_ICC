import React, { useState } from 'react'

export default function MyForm({setParentFormData, setSubmitCount}) {

  const [formData, setFormData] = useState({"first-name": "", "last-name": "", "email": "", "age": "", "message": ""}) 

  function handleDataChange(e) {
    const { id, value } = e.target
    setFormData(prevData => ({ ...prevData, [id]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setParentFormData(formData)
    setSubmitCount(prevCount => prevCount + 1)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
        <h1>Contact Us</h1>
        <div className="flex">
            <div className="first-name">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" required value={formData['first-name']} onChange={e => handleDataChange(e)}/>
            </div>

            <div className="last-name">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" required value={formData['last-name']} onChange={e => handleDataChange(e)}/>
            </div>
        </div>

        <div className="email">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required value={formData.email} onChange={e => handleDataChange(e)}/>
        </div>

        <div className="age">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" required value={formData.age} onChange={e => handleDataChange(e)}/>
        </div>

        <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required value={formData.message} onChange={e => handleDataChange(e)}></textarea>
        </div>

        <div className='submit'>
            <input type="submit" value="Submit" />
        </div>
    </form>
  )
}
