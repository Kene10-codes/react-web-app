import React from 'react'
import { LgText } from 'components/LgText'
import { DatePicker, Input, DynamicSelect, InputTwo, TextArea, UploadFile } from 'components/form/Input'


export const AddBillContent = () => {
  return (
    <div className='p-5 bg-white w-max-full'>
        <LgText text={"Add Bill"} className="font-head text-xl" />
        <div className='flex flex-col'>
        <div className='flex justify-between content-center mt-5'>
            <DynamicSelect
              label={"Vendor"}
              data={["james", "John"]}
              placeholder={"Choose"}
              className={"mr-10"}
            />
            <DatePicker
              label={"Date"}
              placeholder={"2021-04-05"}
              className={"mx-10"}
            />
            <InputTwo
              label={"Bill #"}
              className={"mx-10"}
            />   
        </div>
        <div className='flex justify-between content-center'>
          <div>
           <div className='flex flex-row'>
           <DynamicSelect
              label={"Currency"}
              data={["USD - US Dollar", "Pound"]}
              placeholder={"USD - US Dollar"}
              className={"mr-10"}
            />
            <DatePicker
              label={"Date"}
              placeholder={"2021-04-05"}
              className={"mx-10"}
            />
           </div>
           <div className='flex flex-row'>
           <DynamicSelect
              label={"Currency"}
              data={["USD - US Dollar", "Pound"]}
              placeholder={"USD - US Dollar"}
              className={"mr-10"}
            />
            <UploadFile
              type={"file"}
              label={"Upload copy of Bill"}
              // placeholder={"Upload file"}
              className={"mx-10"}
            />
            </div>
           </div>
            <TextArea
              label={"Note"}
              className={"mx-10"}
            />
        </div>
        </div>

        <div className='border border-darkGray w-max-full'>
        <table class="table-auto">
         <thead>
            <tr className='border-b-2 h-10'> 
             <th className='md:px-4 px-2 font-bold text-xs'>Item</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Expense Category</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Description</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Qty</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Price</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Tax</th>
             <th className='md:px-4 px-2 font-bold text-xs'>Amount</th>
            </tr>
         </thead>
        <tbody>
            <tr className='border-b-2'>
             <td> {/* <hr className='mb-4' /> */}
             <DynamicSelect
              data={["james", "John"]}
              placeholder={"Choose"}
              className={"mr-10"}
            /></td>
             <td> {/* <hr className='mb-4' /> */}
              <DynamicSelect
               data={["james", "John"]}
               placeholder={"Choose"}
               className={"mr-10"}
              />
              </td>
              <td>
                <InputTwo />
              </td>
              <td>
                <InputTwo
                 placeholder={"1"}
                 className={"text-center w-1"}
                />
              </td>
              <td>
                <InputTwo
                 placeholder={""}
                 className={"text-center"}
                />
              </td>
              <td>
                <InputTwo
                 placeholder={"1"}
                 className={"text-center"}
                />
              </td>
               <td>
                <InputTwo
                 placeholder={"1"}
                 className={"text-center"}
                />
              </td>
            </tr>
        </tbody>
      </table>
        </div>
      


        
    </div>
  )
}

