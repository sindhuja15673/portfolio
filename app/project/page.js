"use client"
import React,{useState, useEffect} from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "@/components/projectCard";

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div id="projects" className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-teal-400 mt-15">My Projects</h2>
      
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-2 gap-14">
        {projects && projects.length > 0 ? (projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4  rounded-xl shadow-lg hover:scale-105 transition transform border-1 border-blue-400 duration-300 hover:shadow-[0px_0px_10px_3px_rgba(135,206,250,0.6)]">
<h3 className="text-xl font-semibold mt-3 mb-3" >{project.title}</h3>
    <ProjectCard width={300} height={200} className="rounded-lg " key={index} project={project} />
            {/* <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg" /> */}
            
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <div className="flex gap-4 mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))):(
          <p className="text-gray-400">No projects found.</p>
        )}
      </div>
    </div>
  );
}



