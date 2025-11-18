'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (isDark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark((s) => !s)}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="fixed top-4 right-4 px-3 z-50 py-1.5 rounded-xl shadow-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
