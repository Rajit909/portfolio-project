import Photo from "../../assets/dpm.png";
import Button from "../Button/Button";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import 'animate.css'


function About() {
  return (
    <>
    <div className="flex justify-around my-6 items-center flex-col sm:flex-row dark:text-white">
    <img
        src={Photo}
        alt="dp"
        className="w-64 sm:w-80 animate__animated animate__fadeInLeft"
      />
      
    </div>
    </>   
  )
}

export default About
