import React from 'react'
import './ProjectCard.css'
import Pill from '../Pill/Pill'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProjectCard(props) {

    let { title , image , link , summary , skills } = props.data 

  return (
    <a href={link} className='project-card group p-4 -mx-4 transition rounded-md flex flex-col-reverse md:flex-row gap-4'>
        <div className='sm:w-1/2 md:w-1/4'>
            <div className=" group-hover:border-slate-300/20 border-slate-200/10 transition rounded-sm border-2" >
                <img src={image} width={'100%'} style={{objectFit:"cover"}} className='rounded-sm min-h-[90px]' alt="" />
            </div>
        </div>
        <div className="sm:w-3/4">
            <div className='flex items-center gap-3 '>
                <h5 className="text-md font-medium leading-snug group-hover:text-teal-300">{title}</h5>
                <ArrowOutwardIcon fontSize='small'  />
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
