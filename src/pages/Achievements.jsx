import React from 'react'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import 'animate.css';
import "pure-react-carousel/dist/react-carousel.es.css";
import AchivementCard from '../components/Achievements/AchievementCard';
import AchievementData from '../components/Achievements/AchievementData.json'
import { GrPrevious, GrNext } from "react-icons/gr";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

function Achievements({theme}) {
  return (
    <>
    <Navbar theme={theme} url1={"/"} text1={"home"} url2={"/blogs"} text2={"blogs"} url3={"/projects"} text3={"projects"} url4={"/contact"} text4={"contact"}  />
    <div className="mt-12">
        <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">
            ACHIVEMENTS:
        </h1>
        <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">Here you can find information about my career achievements and some of my important certificates.</p>


        <div className="container mx-auto animate__animated animate__bounceInDown">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={AchievementData.length}
                visibleSlides={1}
                className="relative">
                {/* TODO: Design the buttons at the disable state  */}

                <ButtonBack className="absolute left-[10px] md:left-[-80px] sm:left-[-45px] top-1/2 sm:top-[65%] md:top-[45%] transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-2 md:p-4 z-30">
                    <GrPrevious className="sm:w-6 sm:h-6 md:w-12 md:h-12 font-black" />
                </ButtonBack>
                <Slider className="">
                    {AchievementData.map((item) => (
                        <Slide index={item.index} key={item.index} className=''>
                            <AchivementCard
                                title={item.title}
                                img={item.img}
                                desc={item.desc}
                                date={item.date}
                                org={item.org}
                            />
                        </Slide>
                    ))}
                </Slider>
                <ButtonNext className="absolute right-[10px] sm:right-[-45px] md:right-[-80px] top-1/2 sm:top-[65%] md:top-[45%] transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 rounded-full p-2 md:p-4">
                    <GrNext className="sm:w-6 sm:h-6 md:w-12 md:h-12 font-bold dark:text-slate-400 " />
                </ButtonNext>
            </CarouselProvider>
        </div>
    </div>
    <Footer theme={theme} />
</>
  
  
  )
}

export default Achievements
