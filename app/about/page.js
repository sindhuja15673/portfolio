import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function AboutPage() {
  return (
    <div id="about" className="min-h-screen flex flex-col md:flex-row  items-center justify-center bg-gray-900 text-white p-6">
      {/* <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-lg"> */}       
        <div className="hidden md:flex w-full md:w-1/2 flex pl-3 md:mb-15 justify-center items-center">
          <Image 
            src="/profile.jpeg"
            alt="Sindhuja"
            width={300}
            height={300}
            className=" w-28 h-28 md:w-64 md:h-64 lg:w-78 lg:h-78 rounded-full object-cover border-4 border-blue-400 duration-300 shadow-[0px_0px_10px_3px_rgba(135,206,250,0.6)]"
          />
        </div>
<div className="w-full md:mb-15 md:w-2/3 mt-6 md:mt-0 md:pl-8 md:w-2/2 md:text-left  md:w-1/3.5 lg:w-6/8 pr-17">
          <h1 className=" text-3xl mt-6 md:text-4xl font-extrabold text-blue-400">About Me</h1>
          <h2 className="text-lg  md:text-xl text-gray-100 font-medium mt-2">Frontend Developer</h2>

          <p className="mt-4 text-white-400 text-lg leading-relaxed">
            Hi! I&apos;m <span className="text-blue-300 font-semibold">Sindhuja</span>, a creative and passionate Frontend Developer 
            who enjoys building beautiful, responsive, and dynamic web applications.
          </p>

          <p className="mt-4 text-white-400 text-lg leading-relaxed">
            My expertise includes working with modern web technologies like React.js, Next.js, Redux, JavaScript, Tailwind CSS, HTML and CSS. 
            I love crafting user-friendly experiences and ensuring websites perform efficiently.
          </p>

          <p className="mt-4 text-white text-lg leading-relaxed">
            I enjoy learning new technologies, and continuously improving my skills.  
          </p>

          <div className="mt-6">
          <ScrollLink
                  to={"contact"}
                  smooth={true}
                  duration={500}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                >
                 Let&apos;s Connect
                </ScrollLink>
           
          </div>
        </div>
        
    </div>
  );
}

