import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className="flex flex-col justify-center  md:basis-2/3 h-full">
                <h2 className="text-4xl sm:text-6xl font-bold text-white mt-20 md:mt-0">
                    I'm a Full Stack Developer & Graphics Designer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">I specialize in building responsive web applications using React, TypeScript, NextJs, and Laravel. 
                  I also design stunning visual content with tools like Photoshop, Figma, and Canva. 
                  My work blends clean code with creative visuals to deliver seamless digital experiences. </p>
                <div>
                    <Link to="portfolio" smooth duration={500} activeClass="active" spy={true} offset={-50}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                           <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineArrowRight size={25} className='ml-1'/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='basis-3/2'>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w=full"/>
            </div>
        </div>
    </div>
  );
};

export default Home;