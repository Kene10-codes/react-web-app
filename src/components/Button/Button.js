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


export const SubmitButton = ({ text, children, className, ...rest}) => {
  return (
      <>
         <button
          className={`block text-base w-full py-3 mt-4 max-w-full wide text-white bg-sec rounded-lg  ${className}`}
          {...rest}
        >
          {children || text}
        </button>
      </>
    )
  }

  export const ViewButton = ({ text, children, className, ...rest}) => {
    return (
        <>
           <button
            className={`block text-base w-60 py-3 mt-4 max-w-full wide text-white bg-sec rounded  ${className}`}
            {...rest}
          >
            {children || text}
          </button>
        </>
      )
    }
