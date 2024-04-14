import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Pill from '../../components/Pill/Pill';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>
              <ProjectRow/>

            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}


const ProjectRow = () => {
  return(
    <tr className='border-b border-slate-300/10 last:border-none w-full'>
      <td className='text-slate-300 text-sm align-top py-4 pr-4'>2023</td>
      <td className='text-md font-bold align-top py-4 pr-6 max-w-[400px] '>
        <p className='hidden sm:block text-slate-200 mt-[-2px]'> Emerson Collective Lorem ipsum dolor sit amet </p>
        <a href='' className='block sm:hidden pr-4 mt-[-2px]'>
          <span className='text-slate-200 font-semibold'>Emerson collective something something</span>
          <span className='ps-2'><ArrowOutwardIcon fontSize='md' sx={{color:'#e2e8f0'}} /></span>
          
        </a>
      </td>
      <td className=' text-md font-bold align-top py-4 pr-4 max-w-[400px] flex gap-1.5 flex-wrap hidden lg:flex'>
        {
          ['mongoDB' , 'React' , 'Node' , 'Express' , 'MUI' , 'Tailwind' ].map( (el,ind) => <Pill key={ind}>{el}</Pill>)
        } 
      </td>
      <td className=' text-sm font-semibold align-top py-4 pr-6 max-w-[400px] hidden sm:table-cell'>
        <a href='' className='flex items-center gap-1 group '>
          <span className=''>abdulwahab.netlify.app</span>
          <span className='group-hover:translate-x-2 group-hover:translate-y-[-3px] transition'><ArrowOutwardIcon fontSize='sm'  /></span>
        </a>
      </td>
    </tr>
  )
}