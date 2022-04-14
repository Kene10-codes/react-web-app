import React from 'react'
import { Link } from 'react-router-dom'

export const LinkButton = ({text, children}) => {
  return (
    <Link className='text-sec text-md' >{text || children}</Link>
  )
}

