import React from 'react'
import aboutMe from '../asset/json/aboutMe.json'
const AboutMe = () => {
  return (
    <div className='AboutMe_content'>
      <p>title</p>
      <div>
        <span>안녕하세요.신입 개발자 {aboutMe.name}입니다.</span>
      </div>
      <div>
        <p>ABOUT ME</p>
      </div>
      <div className='AboutMe_basic_info_wrapper'>
          <div><div>이름</div><div>{ aboutMe.name }</div></div>
          <div><div>연락처</div>{ aboutMe.phone }</div>
          <div><div>생년월일</div><div>{ aboutMe.birthday }</div></div>
          <div><div>이메일</div>{ aboutMe.email }</div>
          <div><div>주소지</div>{ aboutMe.address }</div>
          <div><div>학력</div>{ aboutMe.graduation }</div>
      </div>
    </div>
  )
}

export default AboutMe