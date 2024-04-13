import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import resume from '../../assets/AbdulWahab_Resume_2024.pdf'
import github from '../../assets/github.png'
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import express from "../../assets/express.png"
import git from "../../assets/git.png"
import mongodb from "../../assets/mongodb.png"
import postman from "../../assets/postman.png"
import tailwind from "../../assets/tailwind.png"
import redux from "../../assets/redux.png"
import mui from "../../assets/mui.png"
import bootstrap from "../../assets/bootstrap.png"
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import ContactForm from '../../components/ContactForm/ContactForm';


export default function Home() {
  return (
    <div className='page home-page bg-slate-900 min-h-[100vh]'>
      <div className="container max-w-screen-xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <header>
            <div className="header-inner">
              <h1 className='tracking-light font-bold text-4xl sm:text-5xl mb-3'>Abdul Wahab Malik</h1>
              <h4 className='text-xl font-medium tracking-light text-slate-200'>Software Engineer</h4>
              <p className='mt-5 max-w-[30ch]'>I build full stack applications using best software engineering practices</p>

              <nav className='mt-16'>
                <ul className='flex flex-col gap-6'>
                  <li className='uppercase nav-active font-bold text-xs tracking-widest'> <span></span> <a href="#about">About</a> </li>
                  <li className='uppercase font-bold text-xs tracking-widest'> <span></span> <a href="#resume">Experience</a> </li>
                  <li className='uppercase font-bold text-xs tracking-widest'> <span></span> <a href="#">Projects</a> </li>
                  <li className='uppercase font-bold text-xs tracking-widest'> <span></span> <a href="#">Achievements</a> </li>
                </ul>
              </nav>

              <ul className="socials flex gap-4 mt-12">
                <li> <a href="https://github.com/Abdul-Wahab-318"> <GitHubIcon  sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0'} , transition : '300ms ease'}}/> </a> </li>
                <li> <a href="https://www.linkedin.com/in/abdulwahabmalik318/"> <LinkedInIcon sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0' } , transition : '300ms ease'}}/> </a> </li>
                <li> <a href="https://wa.me/923115163419"> <WhatsAppIcon sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0' } , transition : '300ms ease'}}/> </a> </li>
              </ul>
            </div>
          </header>
          <main>
            <section id="about">
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 mt-24 lg:mt-0">About</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sint magnam impedit est soluta similique veritatis, unde autem corrupti qui eius reprehenderit cumque alias, dolorem consequuntur debitis necessitatibus laudantium. Nobis!</p>
              <br />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus dignissimos ullam, impedit, quidem officia eius dolor corporis numquam distinctio excepturi ipsum non minima! Laborum aspernatur voluptatum nisi non alias.</p>
              <br />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi enim animi facere iure beatae deserunt hic eum provident, molestiae incidunt amet, voluptatibus placeat expedita? Pariatur consequatur modi quos iusto labore!</p>
            </section>
            <section id="resume" className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6">resume</h3>
              <div className="employment-cards-wrapper">
                <ExperienceCard/>
                <a href={resume} download={'AbdulWahab_Resume_2024'} className='resume-cta-text flex gap-3 mt-12 items-center '>
                  <h4 className="text-md font-bold">View Full Resume </h4>
                  <LaunchIcon className='launch-icon' fontSize='small' sx={{color:"#e2e8f0"}} />
                </a>
              </div>
            </section>
            <section id="skills" className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6">Skills</h3>
              <div className='flex items-center gap-4'>
                <h2 className='text-sm font-medium'>Front End:</h2>
                <div>
                  <img src={js} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={react} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={redux} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={tailwind} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={bootstrap} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={mui} width={'30px'} alt="" />
                </div>
              </div>
              <div className='flex items-center gap-4 mt-6'>
                <h2 className='text-sm font-medium'>Back End:</h2>
                <div>
                  <img src={node} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={express} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={mongodb} width={'30px'} alt="" />
                </div>
              </div>
              <div className='flex items-center gap-4 mt-6'>
                <h2 className='text-sm font-medium'>Tools:</h2>
                <div>
                  <img src={git} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={github} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={postman} width={'30px'} alt="" />
                </div>
              </div>
            </section>
            <section id="projects" className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6">Projects</h3>
              <div className="project-cards-wrapper flex flex-col gap-8 ">
                <ProjectCard/>
                <ProjectCard/>
              </div>
              <Link to={'/projects'} className='group  flex gap-3 mt-12 items-center '>
                <h4 className="text-md font-bold">View Full Project Archive </h4>
                <div className='group-hover:translate-x-1 transition'>
                  <ArrowForwardIcon className='launch-icon' fontSize='small' sx={{color:"#e2e8f0"}} />
                </div>
              </Link>
            </section>
            <section id="achievements" className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 mt-24 lg:mt-0">Achievements</h3>
              <div className="achievment-cards-wrapper flex flex-col gap-4">
                <AchievementCard/>
                <AchievementCard/>
              </div>
            </section>
            <ContactForm/>
          </main>
        </div>
      </div>
    </div>
  )
}
