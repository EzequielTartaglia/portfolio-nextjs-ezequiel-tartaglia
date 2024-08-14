'use client'

import { useState } from "react";
import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";

import SistemaOdinLogo from "../../../public/assets/projects/sistema_odin_logo.jpg";
import SistemaInariLogo from "../../../public/assets/projects/sistema_inari_logo.jpg";
import SistemaApoloLogo from "../../../public/assets/projects/sistema_apolo_logo.jpg";

const projects = [
  {
    title: "Sistema Odin",
    description: "Sistema de Gestión de Aprendizaje",
    dates: "Ene. 2024 - Abr. 2024",
    liveLink: "https://sistema-odin.netlify.app/", 
    logo: SistemaOdinLogo, 
  },
  {
    title: "Sistema Inari",
    description: "Control de Inventarios",
    dates: "May. 2023 - Dic. 2023",
    liveLink: "https://sistema-inari.netlify.app/",
    logo: SistemaInariLogo, 
  },
  {
    title: "Sistema Apolo",
    description: "Gestión de Relaciones con Clientes",
    dates: "Jul. 2022 - Sept. 2022",
    liveLink: "https://sistema-apolo.netlify.app/",
    logo: SistemaApoloLogo, 
  }
  // Agrega más proyectos según sea necesario
];

const ProjectCard = ({ project }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border border-secondary-light">
      <div className="flex items-center mb-4">
        <Image
          src={project.logo}
          alt={`${project.title} Logo`}
          width={50}
          height={50}
          className="h-16 w-16 mr-4 rounded-full object-cover"
        />
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
      </div>
      <p className="text-sm text-gray-400 italic">{project.dates}</p>
      <p className="mt-3 text-gray-300">{project.description}</p>
      <a 
        href={project.liveLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 inline-block text-teal-500 hover:text-teal-300 text-sm font-semibold"
      >
        Ver proyecto
      </a>
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Proyectos"
        goBackRoute={"/"}
        goBackText={"Volver al inicio"}
      />
      <PageBody>
        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 max-w-[100%] border-secondary-light">
          <h2 className="text-4xl text-teal-500 mb-8 font-bold text-center">Proyectos Destacados</h2>
          <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
}
