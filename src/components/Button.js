import React from 'react'

export const PrimaryButton = ({ text, children, className, ...rest}) => {
return (
    <>
       <button
        className={`text-base group border wide text-white bg-primary duration-100 border-sec  shadow-md focus:shadow-none hover:bg-sec hover:text-black ${className}`}
        {...rest}
      >
        {children || text}
      </button>
    </>
  )
}

