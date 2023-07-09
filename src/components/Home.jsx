import React from "react";
import HeroImage from "../components/assets/heroImage.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row"> 
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold
                 text-green-300">I'm a Student</h2>
                <p className="text-gray-500 py-4 max-w-[700px]">
                    I have a good experience in building and  designing software,
                    Currently,I love to work on web application using  technologies like
                    React,Tailwind,Next JS.
                </p>
                <div>
                    <Link to="Experience" smooth duration={500}className="group text-white w-fit px-6
                    py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                      from-slate-400  to-green-400 cursor-pointer">
                      About
                        <span className=' group-hover:rotate-90 duration-300'><AiOutlineArrowRight size={25}
                        className="ml-1"/>
                        </span>
                    </Link>
                </div>
              
            </div>
            <div>
            <img src={HeroImage} alt="my profile" className="rounded-2xl
           mx-auto w-2/3 md:w-200  px-3 opacity-40 "/>
        </div>
        </div>
        <div id="Experience">
  {/* Content of the Experience section */}
</div>

        
    </div>
  )
}

export default Home