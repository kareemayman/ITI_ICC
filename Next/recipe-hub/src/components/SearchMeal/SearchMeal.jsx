"use client"
import React from 'react'
import styles from './SearchMeal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

export default function SearchMeal() {
  const [search, setSearch] = React.useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/search/${encodeURIComponent(search.trim())}`)
    }
  }

  return (
    <form action="" onSubmit={e => handleSubmit(e)} className={styles.form}>
      <input type="text" placeholder='Search by ingredient...' required value={search} onChange={e => setSearch(e.target.value)}/>
      <FontAwesomeIcon icon={faSearch} className={styles.icon}></FontAwesomeIcon>
    </form>
  )
}
