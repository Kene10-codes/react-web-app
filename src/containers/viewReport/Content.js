import { LgText } from 'components/LgText'
import Comment from '../../assets/comment.png'


export const ViewReportContent = () => {
  return (
    <>
    <div className='p-5 bg-white w-max-full'>
    <LgText text={"View Reports"} className="font-head text-xl" />
       <div className='flex justify-between content-center border-gray-100 h-screen '>
          <div className='flex content-center justify-center'>
            <LgText text={"February Report"} className="font-head text-xs" />
            <p className='text-lightGreen bg-lighterGreen rounded-xl w-7 h-6 text-textLight p-1'>New</p>
         </div>
         <div className='flex content-center justify-center'>
            <LgText text={"4th, Oct 2021 11:20am"} className="font-head text-textLight text-tert" />
            <img src={Comment} className="w-4 h-4" /> 
         </div>
       </div>
    </div>
    </>
  )
}

