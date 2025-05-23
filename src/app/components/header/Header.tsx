'use client'
import Link from 'next/link'
import { FiSearch, FiInfo, FiUser } from 'react-icons/fi'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Reporting Explorer</h1>
        <nav className={styles.nav}>
          <Link href="/dashboard">ready-to-use-key-metrices</Link>
          <Link href="/reports">Questions-by-persona</Link>
          <Link href="/insights">Insights</Link>
        </nav>
      </div>
      <div className={styles.right}>
        <FiSearch className={styles.icon} />
        <FiInfo className={styles.icon} />
        <FiUser className={styles.icon} />
      </div>
    </header>
  )
}
