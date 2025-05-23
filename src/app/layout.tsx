// src/app/layout.tsx
import './globals.css'
import Sidebar from './components/sidebar/Sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layoutBody">
        <Sidebar />
        <main className="layoutMain">
          {children}
        </main>
      </body>
    </html>
  )
}
