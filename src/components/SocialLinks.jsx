import React from 'react'
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/blessing.eno',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/blessingsmart',
    },
    {
      id: 5,
      child: (
        <>
          Behance <FaBehance size={30}/>
        </>
      ),
      href: 'https://www.behance.net/blessingsmart',
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:bublessingsmart@gmail.com',
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
      <ul>

        {links.map(({id, child, href, style, download}) => (
          <li 
            key={id} 
            className={
              `flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`
            }
          >
            <a 
              href={href} 
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noopener noreferrer'
            >
              {child}
          </a>
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default SocialLinks