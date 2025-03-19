
"use client";
import React,{useRef,useState} from 'react'
import Image from "next/image";

export default function projectCard({ project }) {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div
        className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-[510px] h-[200px] sm:h-[250px]  "
        onMouseEnter={() => {
          setIsHovered(true);
          if (videoRef.current) videoRef.current.play();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >

        {!isHovered && (
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={250}
            className="object-cover w-full h-full"
          />
        )}

        {isHovered && (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        )}
      </div>
  )
}

