import React from 'react'
import Pill from '../Pill/Pill'

export default function ExperienceCard({ data }) {

    if ( !data )
        return <></>
    const { date , title , company , summary , skills , link } = data 


    console.log(data)

  return (
    <a href={link} className="employment-card rounded-md p-4 flex flex-col md:flex-row gap-1 md:gap-6 items-start -mx-4 -my-2">
        <div className='sm:w-1/4'>
            <p className='text-xs uppercase font-medium'>{date}</p>
        </div>
        <div className='sm:w-3/4'>
            <div className='flex items-center'>
                <h5 className="text-md font-medium leading-snug ">{title}</h5>
                <div className="w-[3px] h-[3px] rounded bg-white mx-2 "></div>
                <h5 className="font-medium text-md">{company}</h5>
            </div>
            <p className='mt-3 font-medium text-sm text-justify'>{summary}</p>
            <div className='flex gap-2 mt-4 flex-wrap'>

            {
                skills.map( (el,ind) => <Pill key={ind}>{el}</Pill>)
            }
            </div>

        </div>
  </a>
  )
}
