export const Input = ({ label, placeholder, id, type, className, onChange}) => {
return (
    <div className={`flex flex-col pb-5 ${className}`}>
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

export const InputTwo = ({type, label, name, value, placeholder, className, onChange, ...rest}) =>  (
  <div className={`flex flex-col flex-wrap mb-6 ${className}`}>
  {label && <label className='text-gray-700 text-xs mb-2'>{label}</label>}
  <div className="w-full relative form-floating mb-3">
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`block appearance-none text-xs w-max-full border border-gray-200 text-gray-700 py-1 px-1 w-inputWidth  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
    {...rest}
  />
  </div>
</div>
)

export const TextArea = ({type, label, name, value, placeholder, className, onChange, ...rest}) =>  (
  <div className={`flex flex-col flex-wrap mb-6 ${className}`}>
  {label && <label className='text-gray-700 text-xs mb-2'>{label}</label>}
  <div className="datepicker w-full relative form-floating mb-3">
  <textarea
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`block appearance-none text-xs w-max-full border border-gray-200 h-20 text-gray-700 py-1 px-1 w-inputWidth  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
    {...rest}
  />
  </div>
</div>
)

export const DatePicker = ({type, label, name, value, placeholder, className, onChange, ...rest}) =>  (
  <div className={`flex flex-col flex-wrap mb-6 ${className}`}>
  {label && <label className='text-gray-700 text-xs mb-2'>{label}</label>}
  <div className="datepicker w-full relative form-floating mb-3" data-mdb-toggle-button="true">
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={`block appearance-none text-xs w-max-full border border-gray-200 text-gray-700 py-1 px-1 w-inputWidth  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300`}
    {...rest}
  />
  </div>
</div>
)

export const DynamicSelect = ({label, placeholder,data, className, onChange, name, value}) => {
  return (
        <div className={`flex flex-col content-center no-wrap ${className}`}>
          {label && <label for="floatingInput" className="text-gray-700 text-xs mb-2">
            {label}
          </label>}
        <div className="relative">
          <select
            className="block appearance-none text-xs w-max-full border border-gray-200 text-gray-700 py-1 px-1 w-inputWidth  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
            id="grid-state"
            onChange={onChange}
            name={name}
            value={value}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {data.map((item, key) => (
                 <option 
                    key={key}
                    value={item}
                 >
                     {item}
                 </option>
            ))}
          </select>
          <div className="pointer-events-none w-max-full absolute inset-y-0 left-20 flex items-center px-5 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
  )
}

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

 export const UploadFile = ({type, id, label, placeholder, className}) => {
   return (
    <div className={`flex flex-col justify-between content-center ${className}`}>

      {label && <label className='text-gray-700 text-xs mb-2' for="formFile" >{label}</label>}
      <div className="w-full relative form-floating mb-3">
      <input className={`
                        block 
                        w-max-full
                        transition 
                        ease-in-out 
                        m-0 text-xs 
                        border 
                        border-gray-200 
                        text-gray-700  
                        px-1 w-inputWidth  
                        rounded 
                        leading-tight 
                        focus:text-gray-700 focus:bg-white focus:outline-none`
                      }
       type={type} id={id} placeholder={placeholder} />
      </div>
  </div>
   )
 }

