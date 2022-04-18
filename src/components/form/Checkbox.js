import React from 'react'

export const Checkbox = ({type, name, value, className, ...rest}) => {
  return (
    <div className="flex flex-row justify-between content-center">
          <input
              type={type}
              name={name}
              value={value}
              className={`form-checkbox h-5 w-5 mr-3 border bg-checkboxBg focus:ring-2 focus:ring-blue-300 rounded ${className}`}
              {...rest}
            />
            <label
              for="checkbox"
              className="text-sm font-medium text-tert" 
            >
              Remember Me
            </label>
  
     </div>
     
  )
}

