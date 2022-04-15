import React from 'react'

export const Checkbox = ({type, name, value, className, ...rest}) => {
  return (
    <div className="flex flex-row justify-between content-center ">
          <input
              type={type}
              name={name}
              value={value}
              className={`form-checkbox h-5 w-5 border focus:ring-2 focus:ring-blue-300 ${className}`}
              {...rest}
            />
            <label
              for="checkbox"
              clasName="text-sm font-medium"
            >
              Remember Me
            </label>
  
     </div>
     
  )
}

