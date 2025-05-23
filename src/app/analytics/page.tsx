'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Header from '../components/header/Header'
export default function ReportsPage() {
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/reports/${encodeURIComponent(id)}`)
  }

  const reports = ['Report A', 'Report B']

  return (
      <div className={styles.pageContainer}>
        <Header />
      <h1 className={styles.header}>Reports Page</h1>
     
      <div className={styles.grid}>
        hii
      </div>
    </div>
  )
}
