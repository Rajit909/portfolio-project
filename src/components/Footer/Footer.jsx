import React from 'react'
import Coffee from "../../assets/black-button.png"

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from "react-icons/fa"

import {GrInstagram} from "react-icons/gr"
import {ImBlog} from "react-icons/im"


function Footer({theme}) {
  return (
    <div className='flex flex-col justify-center items-center dark:text-white'> 
      <a href="https://www.buymeacoffee.com/" className='w-48 mb-4'>
        <img src={Coffee} alt="buymeacoffee" />
      </a>
      <h2 className="font-zen">Living, Learning & Coding</h2>
      <h2 className="font-zen">Everyday...</h2>
      <div className="text-3xl my-2 flex ">
        <a href="https://www.facebook.com/profile." target="_blank" rel="noreferrer"><FaFacebook className="mx-2 hover:text-[#3b5998]" /> </a>
        <a href="https://www.instagram.com/rajitkumar909" target="_blank" rel="noreferrer"><GrInstagram className="mx-2 hover:text-pink-600" /> </a>
        <a href="https://twitter.com/RajitKu39227624" target="_blank" rel="noreferrer"><FaTwitter className="mx-2 hover:text-[#1DA1F2]" /></a>
        <a href="https://www.linkedin.com/in/rajit-kumar-942bb7209" target="_blank" rel="noreferrer"><FaLinkedin className="mx-2 hover:text-[#0077B5]" /> </a>
        <a href="https://github.com/Rajit909" target="_blank" rel="noreferrer"><FaGithub className="mx-2 hover:text-[#24292E]" /> </a>
        <a href="https://rajit.hashnode.dev/" target="_blank" rel="noreferrer"><ImBlog className="mx-2 hover:text-[#23d1e0]" /> </a>
      </div>
      
    </div>
  )
}

export default Footer