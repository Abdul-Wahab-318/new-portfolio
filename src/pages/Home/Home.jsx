import React , {useEffect, useState , useRef} from 'react'
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
import python from "../../assets/python.svg"
import tf from "../../assets/tf.svg"
import scikit from "../../assets/scikit.svg"
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import ContactForm from '../../components/ContactForm/ContactForm';
import experience from '../../variables/experience';
import achievements from '../../variables/achievements';
import { featuredProjects } from '../../variables/projects';


export default function Home() {

  const [currentSection , setCurrentSection ] = useState('about')
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectRef = useRef(null)
  const achievementRef = useRef(null)
  
  React.useEffect(() => {


    const isInViewPort = (element) => {

      const distanceFromTop = element.getBoundingClientRect().top

      if ( distanceFromTop > 0 && distanceFromTop < 300 )
        return true
      else
        return false
      
    }

    const handleScroll = (e) => {

      if (  isInViewPort(aboutRef.current) )
        setCurrentSection(aboutRef.current.id)
      
      else if ( isInViewPort(experienceRef.current) )
        setCurrentSection(experienceRef.current.id)
      
      else if ( isInViewPort(projectRef.current) )
        setCurrentSection(projectRef.current.id)
      
      else if ( isInViewPort(achievementRef.current) )
        setCurrentSection(achievementRef.current.id)
      
    }

    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }

  },[])

  return (
    <div className='page home-page bg-slate-900 min-h-[100vh]'>
      <div className="container max-w-screen-md lg:max-w-screen-xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 xl:gap-6">
          <header>
            <div className="header-inner static lg:fixed">
              <h1 className='tracking-light font-bold text-4xl sm:text-5xl mb-3'>Abdul Wahab Malik</h1>
              <h4 className='text-xl font-medium tracking-light text-slate-200'>Software Engineer</h4>
              <p className='mt-5 max-w-[40ch]'>Building web wonders with coffee since 2021.</p>

              <nav className='mt-16 hidden lg:block'>
                <ul className='flex flex-col gap-6'>
                  <li className={`uppercase font-bold text-xs tracking-widest ${currentSection==='about' ? 'nav-active' : ''}`} > <span></span> <a href="#about">About</a> </li>
                  <li className={`uppercase font-bold text-xs tracking-widest ${currentSection==='resume' ? 'nav-active' : ''} `} > <span></span> <a href="#resume">Experience</a> </li>
                  <li className={`uppercase font-bold text-xs tracking-widest ${currentSection==='projects' ? 'nav-active' : ''}`} > <span></span> <a href="#projects">Projects</a> </li>
                  <li className={`uppercase font-bold text-xs tracking-widest ${currentSection==='achievements' ? 'nav-active' : ''}`} > <span></span> <a href="#achievements">Achievements</a> </li>
                </ul>
              </nav>

              <ul className="socials flex gap-4 mt-4 sm:mt-12">
                <li> <a href="https://github.com/Abdul-Wahab-318"> <GitHubIcon  sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0'} , transition : '300ms ease'}}/> </a> </li>
                <li> <a href="https://www.linkedin.com/in/abdulwahabmalik318/"> <LinkedInIcon sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0' } , transition : '300ms ease'}}/> </a> </li>
                <li> <a href="https://wa.me/923115163419"> <WhatsAppIcon sx={{color:'#94A3B8' , '&:hover' : { color : '#E2E8F0' } , transition : '300ms ease'}}/> </a> </li>
              </ul>
            </div>
          </header>
          <main>
            <section id="about" ref={aboutRef} className='text-justify mt-24 lg:mt-0'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6  lg:mt-0 sticky lg:relative top-0 pb-4 pt-4 sm:pt-1  backdrop-blur ">About</h3>
              <p>Back in 2021, I decided to give programming a shot to see what it's all about. I started programming simple console based applications using C++ and made my way to coding visually appealing websites using just HTML , CSS and Javascript</p>
              <br />
              <p>Slowly yet consistently, I made progress and started developing interactive applications for clients on fiverr and those I met through personal connections at my university. I also took participation in and won several inter-university programming competitions.</p>
              <br />
              <p>In my free time, I like to work on personal projects. When I'm not at my computer, I'm usually watching anime, reading or hitting the gym </p>
            </section>
            <section id="resume" ref={experienceRef} className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 sticky lg:relative top-0 py-4 backdrop-blur ">resume</h3>
              <div className="employment-cards-wrapper gap-6 flex flex-col">
                {
                  experience.map( ( exp , ind ) => <ExperienceCard key={ind} data={exp} />)
                }
                <a href={resume} download={'AbdulWahab_Resume_2024'} className='resume-cta-text flex gap-3 mt-12 items-center '>
                  <h4 className="text-md font-bold">View Full Resume </h4>
                  <LaunchIcon className='launch-icon' fontSize='small' sx={{color:"#e2e8f0"}} />
                </a>
              </div>
            </section>
            <section id="skills" className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 sticky lg:relative top-0 py-4 backdrop-blur ">Skills</h3>
              <div className='flex items-center gap-2 md:gap-4'>
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
                <h2 className='text-sm font-medium'>Machine Learning:</h2>
                <div>
                  <img src={tf} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={python} width={'30px'} alt="" />
                </div>
                <div>
                  <img src={scikit} width={'45px'} style={{width:'50px'}} alt="" />
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
            <section id="projects" ref={projectRef} className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 sticky lg:relative top-0 py-4 backdrop-blur ">Projects</h3>
              <div className="project-cards-wrapper flex flex-col gap-8 ">
                { featuredProjects.map( (project , ind) => <ProjectCard key={ind} data={project} /> )}
              </div> 
              <Link to={'/projects'} className='group  flex gap-3 mt-12 items-center '>
                <h4 className="text-md font-bold">View Full Project Archive </h4>
                <div className='group-hover:translate-x-1 transition'>
                  <ArrowForwardIcon className='launch-icon' fontSize='small' sx={{color:"#e2e8f0"}} />
                </div>
              </Link>
            </section>
            <section id="achievements" ref={achievementRef} className='mt-24'>
              <h3 className="text-sm tracking-widest font-bold uppercase mb-6 mt-24 lg:mt-0 sticky lg:relative top-0 py-4 backdrop-blur ">Achievements</h3>
              <div className="achievment-cards-wrapper flex flex-col gap-4">
                {
                  achievements.map( (ach , ind) => <AchievementCard key={ind} data={ach} />)
                }
              </div>
            </section>
            <ContactForm/>
          </main>
        </div>
      </div>
    </div>
  )
}
