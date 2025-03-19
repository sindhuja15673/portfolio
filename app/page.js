"use client"
import Image from "next/image";
import AboutPage from "./about/page";
import Skills from "./skills/page";
import Projects from "./project/page";
import Contact from "./contact/page";
import { BiLogoLinkedin } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <>
    <div id="home" className="flex items-center justify-center h-screen bg-gray-900 ">
      <div className="w-full md:mt-5 mt-40 md:w-2/3 lg:w-7/8 flex flex-col-reverse md:flex-row rounded-lg p-6">
        
        {/* Left Content */}
        <div className="w-full  p-4 text-white">
          <h1 className="text-1xl md:text-3xl font-bold p-2">Hi, This is </h1>
          <h1 className="text-3xl md:text-6xl font-bold p-2">Sindhuja</h1>
          <h2 className="text-2xl font-bold p-2">
            And I&apos;m a <span className="text-blue-400">
            <Typewriter
                  words={["Frontend Developer", "Web Developer", "React Developer", "Next.js Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
          </h2>
          <p className="mt-2 p-2">
            I am a Web Developer specialized in HTML,CSS, JavaScript, React, Redux, Redux Saga, Next.js, and modern web technologies.
            Let&apos;s build amazing projects together!
          </p>

          <div className="flex items-center gap-4 mt-4 p-2">
            <span className="w-8 h-8 border-2 border-blue rounded-full flex items-center justify-center transition hover:bg-blue-400 hover:text-blue-400 text-blue-400 duration-300 hover:shadow-[0px_0px_10px_1px_rgba(135,206,250,0.6)]  " >
              <a href="https://github.com/sindhuja15673/"><TbBrandGithubFilled className="text-blue-400 text-1xl hover:text-gray-900 transition duration-300 "/></a></span>
            <span className="w-8 h-8 border-2 rounded-full flex items-center justify-center transition hover:bg-blue-400 hover:text-blue-400 text-blue-400  duration-300 hover:shadow-[0px_0px_10px_1px_rgba(135,206,250,0.6)]  ">
            <a href="https://www.linkedin.com/in/sindhuja-krishnamoorthy-9b0712223/"><BiLogoLinkedin className="text-blue-400 text-1xl hover:text-gray-900 transition duration-300"/></a>
            </span>
            <span className="w-8 h-8 border-2 rounded-full flex items-center justify-center transition hover:bg-blue-400 hover:text-blue-400 text-blue-400 duration-300 hover:shadow-[0px_0px_10px_1px_rgba(135,206,250,0.6)]">
  <a  href="mailto:ssindhujak69@gmail.com">
    <MdEmail className="text-blue-400 text-1xl hover:text-gray-900 transition duration-300"/>
  </a>
</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/profile.jpeg"
            alt="Sindhuja"
            width={300}
            height={300}
            className=" w-28 h-28 md:w-64 md:h-64 lg:w-78 lg:h-78 rounded-full object-cover border-4 border-blue-400 duration-300 shadow-[0px_0px_10px_3px_rgba(135,206,250,0.6)]"
          />
        </div>
      </div>
    </div>
    <AboutPage/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}





