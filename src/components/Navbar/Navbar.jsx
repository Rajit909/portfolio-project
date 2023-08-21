import { useState } from "react"
import { Link } from "react-router-dom";
import Navbtn from "./Navbtn"

import bLogo from "../../assets/logo-black.png"
import wLogo from "../../assets/logo-white.png"
import {CgMenuRight} from "react-icons/cg"

function Navbar({ theme, url1, text1, url2, text2, url3, text3, url4, text4}) {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  }
  return (
    <>
        <nav className="hidden sm:flex mx-2 sm:mx-4 font-nav flex justify-between sm:my-[-20px] ">
            <button className="animate__animated animate__bounceInLeft basis-1/3 justify-start ">
                <Navbtn url={url1} text={text1} />
                <Navbtn url={url2} text={text2} />
            </button>
            <Link to="/">
                <img 
                    src={theme === "dark" ? wLogo : bLogo} 
                    alt="Logo" 
                    className="w-36 sm:w-40 sm:mt-6 animate__animated animate-bounce"
                />
            </Link>
            <button className="animate__animated animate__bounceInRight basis-1/3 justify-end ">
                <Navbtn url={url3} text={text3} />
                <Navbtn url={url4} text={text4} />
            </button>
        </nav>

        {/* For Mobile */}
        <nav className="flex sm:hidden p-4 flex items-center justify-between font-bold">
            <Link to="/">
                <img 
                 src={theme === "dark" ? wLogo : bLogo}
                 alt="Logo" 
                 className="w-32"
                />
            </Link>

            <div className="relative">
                {/* Dropdown toggle button */}
                <button
                    className="block p-1 text-3xl dark:text-white bg-transparent bg-gray-100 rounded-md mt-[-25px] "
                    onClick={handleClick}
                >
                    <CgMenuRight/>
                </button>
                {/* dropdown List */}
                <div 
                    className=" absolute right-0 w-48 bg-white bg-gray-100 rounded-md shadow-md shadow-xl z-10 "
                    style={{display: isHidden ? "none" : "block"}}
                >
                    <Link
                        to="/blogs"
                        className="block px-4 py-1 text-sm text-gary-700 hover:bg-gray-300 rounded hover:text-black "
                    >Blogs
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-4 py-1 text-sm text-gary-700 hover:bg-gray-300 rounded hover:text-black "
                    >CONTACT ME
                    </Link>
                    <Link
                        to="/projects"
                        className="block px-4 py-1 text-sm text-gary-700 hover:bg-gray-300 rounded hover:text-black "
                    >PROJECTS
                    </Link>
                    <Link
                        to="/achievements"
                        className="block px-4 py-1 text-sm text-gary-700 hover:bg-gray-300 rounded hover:text-black "
                    >ACHIEVEMENTS
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
