import CallToActionButton from "@/components/buttons/CallToActionButton";
import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";
import SkillsSection from "./SkillsSection";
import ProjectCard from "./ProjectCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <>
      <PageHeader title="Inicio" />
      <PageBody>
        <div className="relative w-full bg-gradient-to-r from-black to-gray-800 text-white p-16 flex flex-col md:flex-row items-start justify-between">
          <div className="relative w-full md:w-1/2 h-[400px] md:h-[550px] z-0">
            <Image
              src="https://i.ibb.co/DDCMx6d/profile.png"
              alt="Ezequiel M. Tartaglia"
              className="object-cover opacity-75"
              layout="fill"
              quality={100}
            />
          </div>
          <div className="absolute top-[250px] right-0 text-left z-10 md:w-1/2">
            <h1 className="text-5xl font-bold text-teal-400">
              Ezequiel M. Tartaglia{" "}
            </h1>
            <p className="text-xl mt-2 text-gray-200">
              Associated of Applied Science in Applied Technology
            </p>
            <p className="text-2xl mt-4 text-teal-200">
              Sr. Ingeniero de Software y Científico de Datos
            </p>
          </div>

          <CallToActionButton
            text="Disponible para trabajar"
            route={"https://www.linkedin.com/in/ezequieltartaglia/"}
            openInNewTab
          />
        </div>
        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8">
          <h2 className="text-3xl text-teal-500 mb-6 flex items-center">
            <svg
              className="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
              stroke-width="2"
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
            <span className="text-teal-200"> FELANIX</span>, creando
            integraciones de sistemas biometricos de gestion, impacto en la nube
            y desarrollo de un sistema CRM propio. Colaborar en{" "}
            <span className="text-teal-200">EMSETEC</span> para crear sistemas
            integrales de gestión de edificios y módulos de Internet de las
            cosas (IoT) para destacadas instituciones bancarias. Además,
            desempeñé un papel fundamental en el despliegue de una plataforma de
            deportes electrónicos en web3 con criptomonedas como Desarrollador
            de Software Full Stack en{" "}
            <span className="text-teal-200">Pocketful of Quarters</span>. Asi
            tambien con{" "}
            <span className="text-teal-200">Making Publicidade</span> para crear
            sistemas de impacto en publicidades digitales para bancos
            internacionales como Galicia, Santander, Itau, Honda, Natura, etc.
            Mi experiencia se extiende a la gestión de datos y el desarrollo de
            software para campañas publicitarias, trabajando en estrecha
            colaboración con destacadas empresas internacionales en este ámbito.
            Estos diversos proyectos me han dotado de una amplia gama de
            habilidades y conocimientos que continúo aplicando y perfeccionando
            en mis roles actuales..
          </p>
          <CallToActionButton
            text="Conoce mas sobre mis experiencias profesionales"
            route={"/professional_experiences"}
          />
        </div>

        <SkillsSection />

        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 w-full">
          
          <h2 className="text-3xl text-teal-500 mb-6 flex">
        <FontAwesomeIcon
          icon={faProjectDiagram}
          className="w-8 h-8 mr-2 text-teal-400"
        />

      Proyectos para empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Bohemian (Landing Page & Plataforma educativa)"
              text="Plataforma educativa sobre terrarios."
              buttonText="Link al proyecto real"
              buttonRoute="https://bohemian-co-art.netlify.app/"
            />

            <ProjectCard
              title="Felanix - Unagi (CRM)"
              text="Sistema CRM para gestión de construcción de edificios, proyectos, control de asistencia, liquidación de sueldos, entre otras funcionalidades."
              buttonText="Link al proyecto real"
              buttonRoute="http://felanix.unagi.com.ar/a/users/sign_in"
            />

            <ProjectCard
              title="Emsetec - Zeus (CRM)"
              text="Sistema CRM para gestion de operaciones y mantenimiento edilicio."
              buttonText="Link al proyecto real"
              buttonRoute="https://app.emsetec.com.ar/v2/users/login"
            />

            <ProjectCard
              title="PocketFull Of Quarters (Landing Page & Plataforma gaming + Web3)"
              text="Plataforma de Web3 para videojuegos, conectada con Blockchain."
              buttonText="Link al proyecto real"
              buttonRoute="https://www.poq.gg/"
            />
          </div>
          <br />
          <CallToActionButton
            text="Conoce mas sobre mis proyectos"
            route={"/projects"}
          />
        </div>
      </PageBody>
    </>
  );
}
