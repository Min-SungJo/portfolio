import React from 'react'
import project_list from '../asset/json/project.json'

const Project = () => {
  const contents = project_list.map(
    (item, idx) => (
      <div key={idx}>
        <div>
          <img width='400rem' height='400rem'/>
        </div>
        <div>
          <div>{item.title}</div>
          <div>{item.period}</div>
          <div>{item.member}</div>
          <div><span>내용</span></div>
          <div>{item.description}</div>
          <div><span>프론트엔드</span></div>
          <div>{item.front}</div>
          <div><span>백엔드 </span></div>
          <div>{item.back}</div>
          <div><span>데이터베이스 </span></div>
          <div>{item.db}</div>
          <div><span>git링크 </span></div>
          <div>{item.git}</div>
        </div>
      </div>
    )
  )
  return (
    <div className='project_content'>
      <p>Project</p>
      {contents}
    </div>
  )
}

export default Project