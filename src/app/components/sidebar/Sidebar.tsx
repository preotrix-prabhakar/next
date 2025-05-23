'use client'
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Get Insights', href: '/insights' },
  { label: 'Reports', href: '/reports' },
  { label: 'Analytics Content Explorer', href: '/analytics' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Report Generator</h1>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
