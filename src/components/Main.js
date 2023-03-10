import React from 'react'
import Contact from './Contact'
import Project from './Project'
import AboutMe from './AboutMe'
import Skill from './Skill'

const Main = () => {
  return (
    <div>
        <p>title</p>
        <AboutMe/>
        <p>Project</p>
        <Project/>
        <p>Skills</p>
        <Skill/>
        <p>contact</p>
        <Contact/>
    </div>
  )
}

export default Main