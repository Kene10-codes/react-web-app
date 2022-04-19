import React from 'react'

export const LgText = ({ text, children, className }) => {
  return (
      <h3 className={`max-w-full text-primary text-3xl font-bolder leading-10 ${className}`}>{text || children}</h3>
  )
}

