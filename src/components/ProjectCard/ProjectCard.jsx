import React from 'react'
import './ProjectCard.css'
import Pill from '../Pill/Pill'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProjectCard() {
  return (
    <a href='' className='project-card group p-4 -mx-4 transition rounded-md flex flex-col-reverse md:flex-row gap-4'>
        <div className='sm:w-1/2 md:w-1/4'>
            <div className=" group-hover:border-slate-300/20 border-slate-200/10 transition rounded-sm border-2" >
                <img src="./project-1.jpg" width={'100%'} style={{objectFit:"contain"}} className='rounded-sm' alt="" />
            </div>
        </div>
        <div className="sm:w-3/4">
            <div className='flex items-center gap-3 '>
                <h5 className="text-md font-medium leading-snug group-hover:text-teal-300">Pixel Perfect Clone Of Real Estate Website</h5>
                <ArrowOutwardIcon fontSize='small'  />
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
