import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function AchievementCard(props) {

    if ( !props.data )
        return <></>

    const { title , link , image , date } = props.data

  return (
    <a href={link} className='achivement-card group p-4 -mx-4 transition rounded-md flex flex-col-reverse flex-col md:flex-row gap-4'>
        <div className='w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4'>
            <div className=" group-hover:border-slate-300/20 border-slate-200/10 transition rounded-sm border-2" >
                <img src={image} width={'100%'} style={{objectFit:"contain"}} className='rounded-sm' alt="" />
            </div>
        </div>
        <div className=" lg:w-2/3 xl:w-3/4">
            <div className='flex flex-col  gap-1 '>
                <p className="text-md font-medium leading-snug ">{date}</p>
                <h5 className="text-md font-medium leading-snug group-hover:text-teal-300 transition"> {title} <ArrowOutwardIcon className='transition' fontSize='small'  /> </h5>
            </div>
        </div>
    </a>
  )
}
