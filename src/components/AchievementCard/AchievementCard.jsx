import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function AchievementCard() {
  return (
    <a href='' className='achivement-card group p-4 -mx-4 transition rounded-md flex flex-col-reverse flex-col md:flex-row gap-4'>
        <div className='w-1/2 md:w-1/4'>
            <div className=" group-hover:border-slate-300/20 border-slate-200/10 transition rounded-sm border-2" >
                <img src="./codeair.jpeg" width={'100%'} style={{objectFit:"contain"}} className='rounded-sm' alt="" />
            </div>
        </div>
        <div className="w-3/4">
            <div className='flex flex-col  gap-1 '>
                <p className="text-md font-medium leading-snug ">2023</p>
                <h5 className="text-md font-medium leading-snug group-hover:text-teal-300 transition"> Winner Of CodeAir 2023 <ArrowOutwardIcon className='transition' fontSize='small'  /> </h5>
            </div>
        </div>
    </a>
  )
}
