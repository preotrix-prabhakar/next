'use client'
import { useState } from 'react'
import Carousel from '../components/carousel/Carousel'
import Header from '../components/header/Header'
import ReportCard from '../components/reportCard/ReportCard'
import Select from 'react-select'
import styles from './Dashboard.module.css'

// Sample data
const reports = [
  { title: 'Report A', module: 'Absence', persona: 'Manager', category: 'Attendance', owner: 'Alice' },
  { title: 'Report B', module: 'Payroll', persona: 'HR', category: 'Compensation', owner: 'Bob' },
  { title: 'Report C', module: 'Learning', persona: 'Employee', category: 'Training', owner: 'Alice' },
]

export default function DashboardPage() {
  const [selectedModule, setSelectedModule] = useState<string[]>([])
  const [selectedPersona, setSelectedPersona] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedOwner, setSelectedOwner] = useState<string[]>([])

  const moduleOptions = [...new Set(reports.map(r => r.module))].map(m => ({ value: m, label: m }))
  const personaOptions = [...new Set(reports.map(r => r.persona))].map(p => ({ value: p, label: p }))
  const categoryOptions = [...new Set(reports.map(r => r.category))].map(c => ({ value: c, label: c }))
  const ownerOptions = [...new Set(reports.map(r => r.owner))].map(o => ({ value: o, label: o }))

  const filtered = reports.filter(r =>
    (selectedModule.length === 0 || selectedModule.includes(r.module)) &&
    (selectedPersona.length === 0 || selectedPersona.includes(r.persona)) &&
    (selectedCategory.length === 0 || selectedCategory.includes(r.category)) &&
    (selectedOwner.length === 0 || selectedOwner.includes(r.owner))
  )

  return (
    <div className={styles.pageContainer}>
        <Header />
      <h1 className={styles.header}>Dashboard</h1>
      <Carousel />

      <div className={styles.filters}>
        <Select
          isMulti
          placeholder="Module"
          options={moduleOptions}
          onChange={(vals) => setSelectedModule(vals.map(v => v.value))}
          className={styles.select}
        />
        <Select
          isMulti
          placeholder="Persona"
          options={personaOptions}
          onChange={(vals) => setSelectedPersona(vals.map(v => v.value))}
          className={styles.select}
        />
        <Select
          isMulti
          placeholder="Category"
          options={categoryOptions}
          onChange={(vals) => setSelectedCategory(vals.map(v => v.value))}
          className={styles.select}
        />
        <Select
          isMulti
          placeholder="Owner"
          options={ownerOptions}
          onChange={(vals) => setSelectedOwner(vals.map(v => v.value))}
          className={styles.select}
        />
      </div>

      <div className={styles.grid}>
        {filtered.map((r, idx) => (
          <ReportCard key={idx} title={r.title} />
        ))}
      </div>
    </div>
  )
}
