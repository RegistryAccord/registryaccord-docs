'use client'

import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    window.location.href = '/docs'
  }, [])

  return (
    <div>
      <p>Redirecting to documentation...</p>
      <a href="/docs">Click here if you are not redirected</a>
    </div>
  )
}