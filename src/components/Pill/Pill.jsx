import React from 'react'

export default function Pill({ children }) {
  return (
    <div className=' bg-teal-400/10 py-2 px-3 text-teal-300 rounded-full inline-flex items-center font-medium text-xs'>{children}</div>
  )
}
