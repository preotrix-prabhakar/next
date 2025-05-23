'use client'
import { useRouter } from 'next/navigation'
import styles from './ReportCard.module.css'

export default function ReportCard({ title }: { title: string }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/reports/${title}`)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>Click to view full report</p>
    </div>
  )
}
