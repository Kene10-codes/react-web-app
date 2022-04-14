import React from 'react'

export const Input = ({ label, placeholder, id, type, className, onChange}) => {
return (
    <>
       { label && <label 
       class={`block text-gray-700 text-sm font-bold mb-2" ${className}`}>
        {label}
    
      <input className={`appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
            id={id} 
            type={type} 
            placeholder={placeholder} />
      </label>}
    </>
  )
}

