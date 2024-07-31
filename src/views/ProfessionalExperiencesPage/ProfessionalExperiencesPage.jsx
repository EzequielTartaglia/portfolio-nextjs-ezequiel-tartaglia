'use client' 

import { useState } from "react";
import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";

// Importa las imágenes de los logos de cada empresa
import dasLaborLogo from "../../../public/assets/companies/das_labor_logo.jpg";
import promptTheFutureLogo from "../../../public/assets/companies/prompt_the_future_logo.jpg";
import felanixLogo from "../../../public/assets/companies/felanix_construcciones_logo.jpg";
import isticLogo from "../../../public/assets/companies/istic_logo.jpg";
import emsetecLogo from "../../../public/assets/companies/emsetec_logo.jpg";
import pocketfulLogo from "../../../public/assets/companies/pocketfull_of_quarters_logo.jpg";
import coderhouseLogo from "../../../public/assets/companies/coderhouse_logo.jpg";
import makingPublicidadeLogo from "../../../public/assets/companies/making_publicidade_logo.jpg";
import alianzaAmericaLogo from "../../../public/assets/companies/alianza_america_idiomas_logo.jpg";
import proyectoSUDLogo from "../../../public/assets/companies/proyecto_sud_logo.jpg";

const experiences = [
  {
    role: "Chief Technology Officer || Tech Leader",
    company: "Das Labor",
    location: "Santiago, Chile",
    dates: "Mayo de 2024 - actualidad",
    responsibilities: [
      "Dirigí los departamentos de Programación, Gestión de Datos e Infraestructura, supervisando a los respectivos jefes de área.",
      "Participé activamente en los procesos operativos y avances tecnológicos, incluyendo programación, generación de insights con ciencia de datos y análisis de datos, y soporte de infraestructura.",
      "Desarrollé soluciones a lo largo del ciclo de vida del software, desde análisis de requerimientos hasta implementación para usuarios finales. Adapación a Progressive Web App",
      "Experiencia en programación full-stack utilizando tecnologías como NextJs 14, PostgreSQL, Supabase.",
    ],
    logo: dasLaborLogo,
    category: "IT",
  },
  {
    role: "Chief Technology Officer || Tech Leader",
    company: "Felanix Construcciones",
    location: "La Plata, Provincia de Buenos Aires, Argentina",
    dates: "Agosto de 2023 - actualidad",
    responsibilities: [
      "Dirigí los departamentos de Programación, Gestión de Datos e Infraestructura, supervisando a los respectivos jefes de área.",
      "Participé activamente en los procesos operativos y avances tecnológicos, incluyendo programación, generación de insights con ciencia de datos y análisis de datos, y soporte de infraestructura.",
      "Desarrollé soluciones a lo largo del ciclo de vida del software, desde análisis de requerimientos hasta implementación para usuarios finales.",
      "Experiencia en programación full-stack utilizando tecnologías como Ruby on Rails, PostgreSQL, DBeaver, JavaScript, y pruebas unitarias.",
    ],
    logo: felanixLogo,
    category: "IT",
  },
  {
    role: "Speaker || Contenidista & Evaluador e-learning programación/Data especializado en IA",
    company: "Prompt The Future",
    location: "Remoto",
    dates: "Mayo de 2024 - Julio de 2024",
    responsibilities: [
      "Participacion como Speaker para un Hackathon sobre Prompt Engineering y desarrollo de modelos de Inteligencia Artificial.",
      "Desarrollo de contenidos para el curso de Fundamentos de Inteligencia Artificial",
      "Participación como Speaker en el lanzamiento de productos audiovisuales en el área de inteligencia artificial y programación a nivel internacional."
    ],
    logo: promptTheFutureLogo,
    category: "Pedagogia",
  },
  {
    role: "Instructor universitario de Programación 2",
    company: "Instituto Superior Tecnico Inmaculada Concepción",
    location: "Presencial",
    dates: "Julio de 2023 - Febrero de 2024",
    responsibilities: [
      "Dictado de clases para segundo año de la carrera de analista de sistemas",
      "Desarrollo de trabajos practicos, examenes y presentaciones didacticas sobre temas de desarrollo de software, calidad de software, programacion front-end y back-end",
      "Participación en mesas finales para la promosión de materias de calidad de software (testing)"
    ],
    logo: isticLogo,
    category: "Pedagogia",
  },
  {
    role: "Fullstack Software Engineer & Data Scientist",
    company: "EMSETEC",
    location: "Argentina",
    dates: "Junio de 2023 - Noviembre de 2023",
    responsibilities: [
      "Despliegue de aplicaciones de sistemas de gestión edilicia y módulo Internet of Things (IoT) para entidades bancarias y de renombre como Galicia, Santander, Macro, AYSA, Edenor, la embajada de Israel, Allkem.",
      "Tecnologías utilizadas: Python, Bash (Linux), Git/Github, JavaScript, PHP (CakePHP), MySQL y Docker.",
      "Herramientas de diseño: Scallidraw.",
      "Metodologías ágiles: Kanban, utilización de ticketera Trello.",
      "Gestión de la ticketera y resolución de incidencias de infraestructura (Soporte IT/Help Desk) tanto de manera presencial como mediante acceso remoto (AnyDesk) en áreas de software, cloud, redes y Outlook.",
    ],
    logo: emsetecLogo,
    category: "IT",
  },
  {
    role: "Fullstack Software Engineer",
    company: "Pocketful of Quarters",
    location: "Austin, Texas, Estados Unidos (En remoto)",
    dates: "Enero de 2023 - Junio de 2023",
    responsibilities: [
      "Despliegue de aplicación plataforma de eSports para desarrolladores de videojuegos y usuarios en web3 con criptomonedas / fintech.",
      "Tecnologías utilizadas: NextJS (ReactJs), TypeScript, NodeJs, Tailwind, Git/Github, GraphQL, Playwright, Prisma y Docker.",
      "Herramientas de diseño: Figma, Scallidraw.",
      "Metodologías ágiles: Kanban (y conocimiento de Scrum).",
      "Trabajo en equipo multicontinental con comunicación en inglés para pull requests, documentación de issues, reuniones diarias, etc.",
      "Compromiso con la comunicación abierta y transparente para asegurar la entrega oportuna de proyectos y lograr resultados exitosos.",
      "Experiencia en cumplir con plazos ajustados, objetivos y entregas a tiempo, así como en la limpieza de código y refactorización para optimizar rendimiento y escalabilidad del software.",
    ],
    logo: pocketfulLogo,
    category: "IT",
  },
  {
    role: "Especialista en Administración de Datos y Desarrollo de Software para Campañas Publicitarias",
    company: "Making Publicidade",
    location: "Brasil (remoto)",
    dates: "Octubre de 2022 - Abril de 2023",
    responsibilities: [
      "Administración de bases de datos de campañas publicitarias para empresas internacionales como Nubank, Santander, Itau, Paschoalotto, Natura, Avon, Panfixa, entre otros.",
      "Programación con Python para la ejecución de envíos de campañas publicitarias, recepción y visualización de datos mediante MS Excel.",
      "Uso experto de múltiples servidores remotos y Dropbox para la eficiencia en la gestión de datos.",
      "Optimización y mantenimiento de código en procesos de control de datos y programación con Python para asegurar la eficacia y estabilidad en campañas publicitarias.",
      "Ingreso, análisis y auditoría de datos de facturación diaria y mensual de campañas publicitarias, implementando soluciones automatizadas y software para mejorar eficiencia y precisión.",
    ],
    logo: makingPublicidadeLogo,
    category: "IT",
  },
  {
    role: "Speaker || Contenidista & Evaluador e-learning || Profesor & Tutor Adjunto en Programación/Data",
    company: "Coderhouse",
    location: "Remoto · Híbrido",
    dates: "Junio de 2022 - actualidad",
    responsibilities: [
      "Participación en comisión de inteligencia artificial para empleados de la Universidad Autónoma de Chile.",
      "Liderazgo en la comisión inaugural de Prompt Engineering: Generación de Propts.",
      "Tutoría y enseñanza en programación, data e inteligencia artificial (Data Science, Data Engineering, Python, SQL, Fundamentos de IA, Prompt Engineer: Generación de prompts, Prompt Engineer para programadores, Javascript, ReactJs, NextJs).",
      "Participación como Speaker en el lanzamiento de productos audiovisuales en el área de inteligencia artificial y programación a nivel internacional.",
      "Desarrollo de contenidos institucionales para productos como NextJS e Inteligencia Artificial: Generación de Prompts y Finanzas personales para la Escuela de Negocios.",
      "Preparación de exámenes técnicos para la contratación de talentos académicos."
    ],
    logo: coderhouseLogo,
    category: "Pedagogia",
  },
  {
    role: "Analista y Auditor informático de bases de datos (Data Analytics and Auditor IT)",
    company: "Alianza America Idiomas",
    location: "Brasil y Argentina",
    dates: "Agosto de 2021 - Diciembre de 2022",
    responsibilities: [
      "Supervisión y auditoría de bases de datos informáticas.",
      "Análisis de datos para asegurar el correcto funcionamiento de las bases de datos.",
      "Implementación de mejoras en los sistemas de gestión de datos.",
      "Supervisión del personal administrativo en procesamiento de datos.",
      "Análisis y auditoría de datos para mejorar la eficiencia operativa.",
      "Implementación de prácticas para reducir errores y pérdidas monetarias.",
    ],
    logo: alianzaAmericaLogo,
    category: "IT",
  },
  {
    role: "Desarrollador de proyecto Front-End (Sitio Web)",
    company: "Proyecto SUD",
    location: "Provincia de Buenos Aires, Argentina",
    dates: "Enero de 2022 - Marzo de 2022",
    responsibilities: [
      "Diseño de un sitio web 100% responsive aplicando los mejores principios de diseño.",
      "Desarrollo de las cinco secciones utilizando lenguajes de Frontend.",
      "Implementación y uso de APIs REST para mejorar la comunicación y funcionalidad del sitio.",
      "Diseño gráfico de imágenes y videos, y agregado de funcionalidad de descarga de archivos.",
      "Resolución del 90% de problemas de características que no funcionaban, utilizando soluciones creativas.",
    ],
    logo: proyectoSUDLogo,
    category: "IT",
  },
];

export default function ProfessionalExperiencesPage() {
  const [filter, setFilter] = useState("Todos");

  const filteredExperiences = experiences.filter((experience) =>
    filter === "Todos" ? true : experience.category === filter
  );

  return (
<PageBody>
  <PageHeader title="Experiencias Profesionales" />

  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 my-4">
    <button
      onClick={() => setFilter("Todos")}
      className={`px-4 py-2 rounded ${
        filter === "Todos"
        ? "bg-primary text-title-active-static border border-secondary-light"
        : "bg-gray-800 text-white border border-secondary-light hover:bg-gray-700"
      }`}
    >
      Todos
    </button>
    <button
      onClick={() => setFilter("IT")}
      className={`px-4 py-2 rounded ${
        filter === "IT"
        ? "bg-primary text-title-active-static border border-secondary-light"
        : "bg-gray-800 text-white border border-secondary-light hover:bg-gray-700"
      }`}
    >
      IT
    </button>
    <button
      onClick={() => setFilter("Pedagogia")}
      className={`px-4 py-2 rounded ${
        filter === "Pedagogia"
        ? "bg-primary text-title-active-static border border-secondary-light"
        : "bg-gray-800 text-white border border-secondary-light hover:bg-gray-700"
      }`}
    >
      Pedagogia
    </button>
  </div>

  <div className="relative">
    <div className="absolute inset-y-0 left-1/2 w-1 button-primary-bg"></div>
    {filteredExperiences.map((experience, index) => (
      <div
        key={index}
        className={`mb-8 p-4 bg-gray-900 rounded shadow-md border border-secondary-light w-full sm:w-5/12 relative ${
          index % 2 === 0 ? "sm:ml-0 sm:mr-auto" : "sm:ml-auto sm:mr-0"
        }`}
      >
        <div
          className={`flex items-center mb-8 ${
            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2 p-4"></div>
        </div>
        <div className="flex items-center mb-4">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={50}
            height={50}
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold text-turquoise">
              {experience.role}
            </h2>
            <p className="text-gray-500">{experience.company}</p>
            <p className="text-gray-600">{experience.location}</p>
            <p className="text-gray-600">{experience.dates}</p>
          </div>
        </div>
        <ul className="list-disc pl-6 text-gray-300">
          {experience.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="text-gray-300">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</PageBody>

  );
}
