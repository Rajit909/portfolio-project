import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";



const Home = ({theme}) => {
  return (
    <>
      <Navbar theme={theme} />
      <About />
      <Skills />
      <Footer />
    </>
  )
} 

export default Home;