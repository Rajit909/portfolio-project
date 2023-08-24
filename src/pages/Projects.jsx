import React from 'react'
import Projectlist from '../components/Projects/projlist.json'
import Projitem from '../components/Projects/Projitem'
import 'animate.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Projects({theme}) {
  return (
    <>
      <Navbar theme={theme} url1={"/"} text1={"home"} url2={"/blogs"} text2={"blogs"} url3={"/achievements"} text3={"achievements"} url4={"/contact"} text4={"contact"}  />
        <div className='mt-12'>
            <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">PROJECTS:</h1>
            <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">These are the list of my top favourite projects. Visit my <a href="https://github.com/Rajit909" className="underline">GitHub</a> profile to view all projects.</p>
            <div className="flex flex-wrap m-2 mt-6 justify-center">
                {
                    Projectlist.map((x) => {
                        return(
                            <Projitem key={x.key} tech={x.tech} img={x.img} live={x.live} github={x.github} title={x.title} />
                        )
                    })
                }
            </div>
        </div>
        <Footer theme={theme} />
       
    </>
  )
}

export default Projects
