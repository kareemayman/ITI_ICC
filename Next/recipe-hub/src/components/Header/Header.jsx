import React from 'react'
import styles from '@/components/Header/Header.module.css'  
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>Recipe Hub</Link>
        <div className={styles.links}>
          <Link href="/recipes" className={styles.link}>Recipes</Link>
          {/* <Link href="/favorites" className={styles.link}>Favorites</Link> */}
          <Link href="/about" className={styles.link}>About</Link>
        </div>
      </div>
    </div>
  )
}
