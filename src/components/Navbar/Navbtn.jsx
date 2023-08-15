import "animate.css";
import { Link } from "react-router-dom";

function Navbtn({ text, url }) {
  return (
    <Link
      to={url}
      className="relative uppercase
      before:content-['']
      before:absolute
      before:block
      before:w-full
      before:h-[2px] 
      before:bottom-0 
      before:left-0 
      before:bg-black 
      dark:before:bg-[#F5F5F5]
      before:hover:scale-x-100 
      before:scale-x-0 
      before:origin-top-left
      before:transition 
      before:ease-in-out 
      before:duration-300 
      font-bold sm:font-extrabold
      mx-1 sm:mx-2 md:mx-4 
      sm:text-sm md:text-lg 
      dark:text-[#F5F5F5]"
    >
      {text}
    </Link>
  );
}

export default Navbtn;