import React from 'react'
import Rocket from 'assets/rocket.png'
import Setting from 'assets/setting.png'
import Exit from 'assets/exit.png'
import Comment from 'assets/comment.png'
import Payroll from 'assets/roller.png'
import Card from 'assets/card.png'
import Reports from 'assets/budget.png'
import Bank from 'assets/bank.png'
import Cart from 'assets/cart1.png'
import Analytics from 'assets/people.png'
import Home from 'assets/home.png'
import Accounting from 'assets/Group.png'
import Logout from 'assets/logout.png'
import arrow from 'assets/arrowBtn.png'

export const SidebarContainer = () => {
  return (
    <div className='pl-5'>
        <Sidebar
           rocket={Rocket}
           welcomeText={"Welcome"}
           arrowBtn={arrow}
           dashboardText={"Dashboard"}
           salesText={"Sales"}
           purchasesText={"Purchases"}
           accountingText={"Accounting"}
           bankingText={"Banking"}
           payrollText={"Payroll"}
           reportsText={"Reports"}
           viewReportText={"Analytics"}
           settingText={"Setting"}
           logoutText={"Logout"}
           setting={Setting}
           banking={Bank}
           purchases={Cart}
           dashboard={Home}
           sales={Exit}
           accounting={Accounting}
           payroll={Payroll}
           reports={Reports}
           viewReport={Analytics}
           logout={Logout}
           accessPayment={Card}
           accessPaymentText={"Access Payment"}
           
           

           
    
           
        />
        sidebar
    </div>
  )
}

export const Sidebar = ({ 
    rocket, 
    welcomeText, 
    arrowBtn, 
    dashboard, 
    dashboardText,
    sales, 
    salesText,
    payroll, 
    payrollText,
    purchases, 
    purchasesText,
    accessPayment,
    accessPaymentText, 
    accounting, 
    accountingText,
    banking, 
    bankingText,
    reports,
    reportsText,
    viewReport, 
    viewReportText,
    setting,
    settingText,
    logout,
    logoutText,
    billsText,
    vendorsText,
    productServicesText
    }) => {
    return (
      <>
         <aside className='w-60' aria-label="Sidebar">
         <div class="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
           <ul className='space-y-2'>
             <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={rocket} />
               <span class="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{welcomeText}</span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={dashboard} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{dashboardText}</span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={sales} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{salesText}</span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
            <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <div className='rounded-3xl bg-darkBlue p-2'><img className='h-4 w-4 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' src={purchases} /></div>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap text-sm text-lightGray" sidebar-toggle-item>{purchasesText}</span>
                  <svg sidebar-toggle-item className="w-6 h-6 text-lightGray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{billsText}</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{vendorsText}</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{productServicesText}</a>
                  </li>
            </ul>
         </li>
         <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={accounting} />
               <span class="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{accountingText}</span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={banking} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{bankingText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={payroll} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{payrollText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={reports} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{reportsText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={viewReport} />
               <span className="flex-1 ml-3 whitespace-nowra text-sm text-lightGray">{viewReportText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={setting} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{settingText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-4 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={logout} />
               <span className="flex-1 ml-3 whitespace-nowrap text-sm text-lightGray">{logoutText} </span>
               <img className='flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor' src={arrowBtn} />
              </a>
             </li>
             <li className='bg-darkBlue rounded-xl'>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <img className='h-4 w-5 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' src={accessPayment} />
               <span className="flex-1 ml-3 whitespace-nowrap text-white">{accessPaymentText} </span>
              </a>
             </li>
          </ul>
         </div>
     </aside>
      </>
    )
  }

