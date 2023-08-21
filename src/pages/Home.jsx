import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";



const Home = ({theme}) => {
  return (
    <>
      <Navbar theme={theme} url1={"/blogs"} text1={"blogs"} url2={"/projects"} text2={"projects"} url3={"/achievements"} text3={"achievements"} url4={"/contact"} text4={"contact"}  />
      <About />
      <Skills />
      <Footer />
    </>
  )
} 

export default Home;