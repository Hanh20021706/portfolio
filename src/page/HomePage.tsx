import React from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Project from '../components/Project'
import ResumeMe from '../components/ResumeMe'
import Skills from '../components/Skills'

const HomePage = () => {
    return (
        <div className="" id='page'>
           
            <div>
                <AboutMe />
                <ResumeMe />
                <Skills />
                <Project />
                <Contact />


            </div>
        </div>
    )
}

export default HomePage
