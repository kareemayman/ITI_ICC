import React, { useState } from 'react'
import MyForm from './MyForm'
import Output from './Output'

export default function Parent() {

  const [parentFormData, setParentFormData] = useState({"first-name": "", "last-name": "", "email": "", "age": "", "message": ""})
  const [submitCount, setSubmitCount] = useState(0)

  return (
    <div className="container">
        <MyForm setParentFormData={setParentFormData} setSubmitCount={setSubmitCount}></MyForm>
        <Output parentFormData={parentFormData} submitCount={submitCount}></Output>
    </div>
  )
}
