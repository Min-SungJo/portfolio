import React from 'react'

const Header = () => {
  return (
    <nav className='header_nav'>
        <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
            <li>
                <a>
                    Projects
                </a>
            </li>
            <li>
                <a>
                    Contact
                </a>
            </li>
            <li>
                <a>
                    Resume
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Header