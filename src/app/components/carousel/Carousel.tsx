'use client'
import { useEffect, useState } from 'react'
import styles from './Carousel.module.css'

const items = Array.from({ length: 10 }, (_, i) => String.fromCharCode(65 + i)) // A–J

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 1000) // adjust speed for testing
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(-${index * (100 / items.length)}%)`,
          width: `${items.length * 100}%`
        }}
      >
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
