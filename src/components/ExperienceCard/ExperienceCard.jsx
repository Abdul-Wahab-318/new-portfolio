import React from 'react'
import Pill from '../Pill/Pill'

export default function ExperienceCard() {
  return (
    <a href='https://www.linkedin.com/posts/abdulwahabmalik318_nstp-nust-activity-7084037094595018752-wYXR?utm_source=share&utm_medium=member_desktop' className="employment-card rounded-md p-4 flex gap-6 items-start -mx-4 -my-2">
        <div className='w-1/4'>
            <p className='text-xs uppercase font-medium'>Jun - Oct 2023</p>
        </div>
        <div className='w-3/4'>
            <div className='flex items-center'>
                <h5 className="text-md font-medium leading-snug ">MERN Stack Developer</h5>
                <div className="w-[3px] h-[3px] rounded bg-white mx-2 "></div>
                <h5 className="font-medium text-md">Tapit Card</h5>
            </div>
            <p className='mt-3 font-medium text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta amet quis non nemo beatae quibusdam quo, facere, facilis consequatur a aliquid accusantium dolorem pariatur iure provident ex eius in esse?</p>
            <div className='flex gap-2 mt-4 flex-wrap'>

            {
                ['mongoDB' , 'React' , 'Node' , 'Express' , 'MUI' , 'Tailwind' ].map( (el,ind) => <Pill key={ind}>{el}</Pill>)
            }
            </div>

        </div>
  </a>
  )
}
