import React from 'react'

const AboutMe = () => {
  return (
    <div className='AboutMe_content'>
      <div>
        안녕하세요.신입 개발자 ---입니다.
      </div>
      <p>ABOUT ME</p>
      <div className='AboutMe_basic_info_wrapper'>
        <div><div>이름</div><div>---</div></div>
        <div><div>생년월일</div><div>--.--.--</div></div>
        <div><div>주소지</div></div>
        <div><div>연락처</div></div>
        <div><div>이메일</div></div>
        <div><div>학력</div></div>
      </div>
    </div>
  )
}

export default AboutMe