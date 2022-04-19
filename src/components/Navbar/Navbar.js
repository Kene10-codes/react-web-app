import Logo from 'assets/logo.png'
import arrow from 'assets/arrow.png'
import arrowRight from 'assets/arrowRight.png'
import notification from 'assets/notification.png'
import circle from 'assets/circle.png'


export const NavbarContainer = () => {
    return (
        <div className='h-20 bg-lighterGray'>
           <Navbar 
             src={Logo} 
             text={"HostBeak"} 
             href={"/"} 
             arrowBtn={arrowRight}
             arrowDown={arrow}
             notification={notification}
             circle={circle}
             data={["Oguluwa", "James"]}
            />
        </div>
    )
}

export const Navbar = ({ src, href, text, data, notification, onChange, value, arrowBtn, circle }) => {
  return (
       <nav className='flex flex-row justify-between content-center p-5'>
           <div className='flex flex-row flex-nowrap justify-between content-center rounded-borderRadius w-widthWrapper px-3 py-2'>
               <img className='w-7 h-7' src={src} href={href} />
               <span className='font-thin'>{text}</span>
               <img className='w-3 h-5 pt-2' src={arrowBtn} />
           </div>
           <div >
              <div className='flex flex-row flex-nowrap justify-between content-center w-widthWrapperTwo px-3 py-2'>
               <img className='w-3 h-5 pt-2' src={notification} />
               <img className='w-6 h-6' src={circle} />
               <div className="relative">
            <select
                className="block appearance-none w-max-full text-sm border border-gray-100 text-gray-700 py-1 px-3 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                id="grid-state"
                onChange={onChange}
                value={value}
            >
                {data.map((item, key) => (
                    <option 
                        key={key}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none w-max-full absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
            
           </div>
        </nav>
  )
}

