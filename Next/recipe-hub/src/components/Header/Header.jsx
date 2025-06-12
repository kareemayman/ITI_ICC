import React from 'react'
import styles from '@/components/Header/Header.module.css'  
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}><Link href='/'>Recipe Hub</Link></div>
        <div className={styles.links}>
          <Link href="/recipes">Recipes</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  )
}
