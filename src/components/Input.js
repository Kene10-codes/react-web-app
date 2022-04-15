import React from 'react'

export const Input = ({ label, placeholder, id, type, className, onChange}) => {
return (
    <div className="flex flex-col">
       { label && <label 
       class={`block text-gray-700 text-sm text-tert pb-3 font-medium mb-2" ${className}`}>
        {label}
      </label>}
      <input className={`border-2 border-x-transparent placeholder-gray-300 border-t-transparent border-b-gray focus:border-b-primary  block py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
            id={id} 
            type={type} 
            placeholder={placeholder} 
      />
      
    </div>
  )
}

