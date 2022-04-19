import React from 'react'
import { LgText } from 'components/LgText'
// import { DatePicker } from 'components/form/DatePicker'
import { DatePicker, Input, DynamicSelect, InputTwo, TextArea } from 'components/form/Input'


export const AddBillContent = () => {
  return (
    <div className='p-5 bg-white w-max-full'>
        <LgText text={"Add Bill"} className="font-head text-xl" />
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
        <div className='flex justify-between content-center mt-2'>
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

            <TextArea
              label={"Note"}
              className={"mx-10"}
            />
        </div>
    </div>
  )
}

