import React from 'react'

export const Input = ({ label, placeholder, id, type, className, onChange}) => {
return (
    <div className="flex flex-col pb-5">
       { label && <label 
       class={`block text-gray-700 text-xs text-tert font-medium mb-3" ${className}`}>
        {label}
      </label>}
      <input className={`border-2 border-x-transparent placeholder-text-xs placeholder-font-bolder  placeholder-gray-300 border-t-transparent border-b-gray focus:border-b-primary block py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`} 
            id={id} 
            type={type} 
            placeholder={placeholder} 
      />
      
    </div>
  )
}

