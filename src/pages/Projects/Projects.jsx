import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Pill from '../../components/Pill/Pill';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { projects } from '../../variables/projects';
import { GitHub } from '@mui/icons-material';
export default function Projects() {
  return (
    <div className='page projects-page bg-slate-900 min-h-[100vh]'>
      <div className="container max-w-screen-md lg:max-w-screen-xl">
        <header>
          <Link to={'/'} className='flex items-center group'  > 
            <span className='group-hover:translate-x-[-8px] transition'> <ArrowBackIcon fontSize='small' sx={{color:'#5eead4'}} /> </span>
            <span className='text-teal-300 font-medium ms-1 pt-1'>Abdul Wahab Malik</span>
          </Link>
          <h1 className='tracking-light font-bold text-4xl sm:text-5xl mb-16 mt-3'>All Projects</h1>
        </header>
        <main>
          <table className='text-left w-full'>
            <thead className='sticky top-0 backdrop-blur border- border-slate-300'>
              <tr>
                <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>Year</th>
                <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>Project</th>
                <th className='py-4 pr-8 text-sm font-semibold text-slate-200  hidden lg:table-cell'>Built With</th>
                <th className='py-4 pr-8 text-sm font-semibold text-slate-200 hidden sm:table-cell'>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map( (proj,ind) => <ProjectRow key={ind} data={proj} />)}


            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}


const ProjectRow = ({ data }) => {
  
  const { title , date , link , skills } = data 

  return(
    <tr className='border-b border-slate-300/10 last:border-none w-full'>
      <td className='text-slate-300 text-sm align-top py-4 pr-4'>{date}</td>
      <td className='text-md font-bold align-top py-4 pr-6 max-w-[400px] '>
        <p className='hidden sm:block text-slate-200 mt-[-2px]'> {title} </p>
        <a href={title} target="_blank" rel="noopener" className='block sm:hidden pr-4 mt-[-2px]'>
          <span className='text-slate-200 font-semibold'>{title}</span>
          <span className='ps-2'><ArrowOutwardIcon fontSize='md' sx={{color:'#e2e8f0'}} /></span>
          
        </a>
      </td>
      <td className=' text-md font-bold align-top py-4 pr-4 max-w-[400px] flex gap-1.5 flex-wrap hidden lg:flex'>
        {
          skills.map( (el,ind) => <Pill key={ind}>{el}</Pill>)
        } 
      </td>
      <td className=' text-sm font-semibold align-top py-4 pr-6 max-w-[400px] hidden sm:table-cell'>
        <a href={link} target="_blank" rel="noopener" className='flex items-center gap-1 group '>
          { data.showGithubRepo ?
            <>
              <span className='mr-2'>Github</span>
              <GitHub fontSize='small' />
            </>
            :
            <>
              <span>{link.slice(8)}</span>
              <span className='group-hover:translate-x-2 group-hover:translate-y-[-3px] transition'><ArrowOutwardIcon fontSize='sm'  /></span>
            </>
          }
        </a>
      </td>
    </tr>
  )
}