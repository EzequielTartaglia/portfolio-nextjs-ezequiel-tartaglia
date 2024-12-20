"use client";

import { useState } from "react";
import CallToActionButton from "@/components/buttons/CallToActionButton";
import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";
import SkillsSection from "./SkillsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import CVCanvasModal from "./CVCanvasModal";
import ProjectCard from "./ProjectCart";

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <PageHeader title="Inicio" />
      <PageBody>
        <div className="relative w-full bg-gradient-to-r from-black to-gray-900 text-white p-8 sm:p-16 flex flex-col md:flex-row items-start justify-between border-secondary-light">
          <div className="relative w-full md:w-[560px] h-[275px] sm:h-[550px] z-0 mb-8 md:mb-0">
            <Image
              src="https://i.ibb.co/bsvYfPt/image-removebg-preview.png"
              alt="Ezequiel M. Tartaglia"
              className="object-cover opacity-75 rounded-full border-secondary "
              layout="fill"
              quality={100}
            />
          </div>
          <div className="relative w-full md:w-1/2 text-left z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-teal-400">
              Ezequiel M. Tartaglia{" "}
            </h1>
            <p className="text-lg sm:text-xl mt-2 text-gray-200">
              Associated of Applied Science in Applied Technology
            </p>
            <p className="text-xl sm:text-2xl mt-4 text-teal-200">
              Sr. Ingeniero de Software y Científico de Datos
            </p>
            <CallToActionButton
              text="Disponible para trabajar"
              route={"https://www.linkedin.com/in/ezequieltartaglia/"}
              openInNewTab
              className="mt-8 sm:mt-8"
            />
            <div className="flex justify-center  space-x-4">
              <div className="flex items-center mt-9">
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <button
                    className="inline-flex items-center justify-center px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"
                    onClick={openModal}
                  >
                    Ver CV embebido
                  </button>
                </span>
              </div>

              <CallToActionButton
                text="Descargar CV"
                route="https://export-download.canva.com/lfx-0/DAF6F9lfx-0/74/0-8153075974166218162.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240719%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T141517Z&X-Amz-Expires=4695&X-Amz-Signature=9a444f65527a0065833169334bbdc7b1184799baded2d2d83cafb054c55d8fd7&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27%255BTL%255D%2520Ezequiel%2520M.%2520Tartaglia%2520-%2520CV.pdf&response-expires=Fri%2C%2019%20Jul%202024%2015%3A33%3A32%20GMT"
                openInNewTab
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 max-w-[100%] border-secondary-light">
          <h2 className="text-3xl text-teal-500 mb-6 flex items-center">
            <svg
              className="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
            Acerca de mí
          </h2>
          <p className="text-white">
            En la actualidad, desempeño el cargo de{" "}
            <span className="text-teal-200">
              C.T.O. Tech Leader, Desarrollador de Software Full Stack Senior
              (Nivel Alto), Gerente de Proyectos, Analista Funcional y
              Científico de Datos.
            </span>{" "}
            Comencé mi carrera en tecnología de la información en 2020, donde
            colaboré con equipos internacionales en proyectos para empresas en
            Argentina, Brasil y Estados Unidos (EE. UU.). Paralelamente a mi
            trayectoria profesional, estoy cursando activamente una{" "}
            <span className="text-teal-200">
              Licenciatura en Tecnología Aplicada en Ingeniería de Software en
              BYU-Idaho
            </span>
            . Para complementar mis esfuerzos académicos, he obtenido una serie
            de certificaciones de reconocidas organizaciones como Google, IBM,
            Coderhouse y diversos organismos gubernamentales.
          </p>
          <p className="text-white  my-4 ">
            A lo largo de mi carrera, he participado activamente en una variedad
            de proyectos de desarrollo impactantes. Esto incluye colaborar con
            <span className="text-teal-200"> Das Labor SPA</span>, creando
            una plataforma de asesorias y certificaciones oficiales para el area farmaceutica y 
            desarrollo de un sistema CRM propio incluyendo un modulo de auditorias e inspecciones.
            <span className="text-teal-200"> Felanix</span>, creando
            integraciones de sistemas biométricos de gestión, impacto en la nube
            y desarrollo de un sistema CRM propio. Colaborar en{" "}
            <span className="text-teal-200">EMSETEC</span> para crear sistemas
            integrales de gestión de edificios y módulos de Internet de las
            cosas (IoT) para destacadas instituciones bancarias. Además,
            desempeñé un papel fundamental en el despliegue de una plataforma de
            deportes electrónicos en web3 con criptomonedas como Desarrollador
            de Software Full Stack en{" "}
            <span className="text-teal-200">Pocketful of Quarters</span>. Así
            también con{" "}
            <span className="text-teal-200">Making Publicidade</span> para crear
            sistemas de impacto en publicidades digitales para bancos
            internacionales como Galicia, Santander, Itaú, Honda, Natura, etc.
            Mi experiencia se extiende a la gestión de datos y el desarrollo de
            software para campañas publicitarias, trabajando en estrecha
            colaboración con destacadas empresas internacionales en este ámbito.
            Estos diversos proyectos me han dotado de una amplia gama de
            habilidades y conocimientos que continúo aplicando y perfeccionando
            en mis roles actuales.
          </p>
          <CallToActionButton
            text="Conoce más sobre mis experiencias"
            route={"/professional_experiences"}
          />
        </div>

        <SkillsSection />

        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 max-w-[100%] border-secondary-light">
          <h2 className="text-3xl text-teal-500 mb-6 flex">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            Proyectos para empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ProjectCard
              title="B&T (Landing Page & Plataforma de gestion para personal de salud)"
              text="Plataforma CRM (Customer Relationship Managment) para la gestión de pacientes, historias clinicas. Incluye roles de pacientes, profesionales, administrativo y administrativo (multiples empresas), y está orientada a la asesoría clinica para Centroamérica y Sudamérica."
              buttonText="Visitar proyecto"
              buttonRoute="https://sistema-asclepio.netlify.app/"
            />
            <ProjectCard
              title="DasLabor (Landing Page & Plataforma Educativa)"
              text="Plataforma LMS (Learning Management System) para la gestión de cursos, módulos, clases, modo comercial, creación y ejecución de exámenes. Incluye roles de administración y de estudiante, y está orientada a la asesoría farmacéutica para Centroamérica y Sudamérica."
              buttonText="Visitar proyecto"
              buttonRoute="https://das-labor.netlify.app/"
            />
            <ProjectCard
              title="Bohemian (Landing Page & Plataforma Educativa)"
              text="Sistema LMS (Learning Management System) para la gestión de cursos, módulos, clases, modo comercial, creación y ejecución de exámenes. Incluye roles de administración y de estudiante, enfocado en terrarios."
              buttonText="Visitar proyecto"
              buttonRoute="https://bohemian-co-art.netlify.app/"
            />
            <ProjectCard
              title="Felanix - Unagi (CRM)"
              text="Sistema CRM para gestión de construcción de edificios, proyectos, control de asistencia, liquidación de sueldos, entre otras funcionalidades."
              buttonText="Visitar proyecto"
              buttonRoute="http://felanix.unagi.com.ar/a/users/sign_in"
            />
            <ProjectCard
              title="Emsetec - Zeus (CRM)"
              text="Sistema CRM para gestión de operaciones y mantenimiento edilicio."
              buttonText="Visitar proyecto"
              buttonRoute="https://app.emsetec.com.ar/v2/users/login"
            />
            <ProjectCard
              title="PocketFull Of Quarters (Landing Page & Plataforma gaming + Web3)"
              text="Plataforma de Web3 para videojuegos, conectada con Blockchain."
              buttonText="Visitar proyecto"
              buttonRoute="https://www.poq.gg/"
            />
          </div>
          <CallToActionButton
            text="Conoce más sobre mis proyectos"
            route={"/projects"}
          />
        </div>
      </PageBody>

      <CVCanvasModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
