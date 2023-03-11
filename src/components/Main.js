import React from 'react'
import Contact from './Contact'
import Project from './Project'
import AboutMe from './AboutMe'
import Skill from './Skill'

const Main = () => {
  return (
    <div className='main_div'>
        <AboutMe/>
        <Project/>
        <Skill/>
        <Contact/>
    </div>
  )
}

export default Main