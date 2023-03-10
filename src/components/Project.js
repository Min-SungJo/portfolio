import React from 'react'
import project_list from '../asset/json/project.json'

const Project = () => {
  const contents = project_list.map(
    (item, idx) => (
      <div>
        <div>{item.title}</div>
        <div>{item.period}</div>
        <div>{item.member}</div>
        <div>{item.description}</div>
        <div>{item.front}</div>
        <div>{item.back}</div>
        <div>{item.db}</div>
        <div>{item.git}</div>
      </div>
    )
  )
  return (
    <div className='project_content'>
      {contents}
    </div>
  )
}

export default Project