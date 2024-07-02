import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "Felanix Construcciones",
    location: "La Plata, Provincia de Buenos Aires, Argentina",
    dates: "agosto de 2023 - actualidad",
    responsibilities: [
      "Dirigí los departamentos de Programación, Gestión de Datos e Infraestructura, supervisando a los respectivos jefes de área.",
      "Participé activamente en los procesos operativos y avances tecnológicos, incluyendo programación, generación de insights con ciencia de datos y análisis de datos, y soporte de infraestructura.",
      "Desarrollé soluciones a lo largo del ciclo de vida del software, desde análisis de requerimientos hasta implementación para usuarios finales.",
      "Experiencia en programación full-stack utilizando tecnologías como Ruby on Rails, PostgreSQL, DBeaver, JavaScript, y pruebas unitarias.",
    ],
  },
  {
    role: "Fullstack Software Engineer & Data Scientist",
    company: "EMSETEC (Autónomo)",
    location: "Argentina (En remoto)",
    dates: "junio de 2023 - noviembre de 2023",
    responsibilities: [
      "Despliegue de aplicaciones de sistemas de gestión edilicia y módulo Internet of Things (IoT) para entidades bancarias y de renombre como Galicia, Santander, Macro, AYSA, Edenor, la embajada de Israel, Allkem.",
      "Tecnologías utilizadas: Python, Bash (Linux), Git/Github, JavaScript, PHP (CakePHP), MySQL y Docker.",
      "Herramientas de diseño: Scallidraw.",
      "Metodologías ágiles: Kanban, utilización de ticketera Trello.",
      "Gestión de la ticketera y resolución de incidencias de infraestructura (Soporte IT/Help Desk) tanto de manera presencial como mediante acceso remoto (AnyDesk) en áreas de software, cloud, redes y Outlook.",
    ],
  },
  {
    role: "Fullstack Software Engineer",
    company: "Pocketful of Quarters",
    location: "Austin, Texas, Estados Unidos (En remoto)",
    dates: "enero de 2023 - junio de 2023",
    responsibilities: [
      "Despliegue de aplicación plataforma de eSports para desarrolladores de videojuegos y usuarios en web3 con criptomonedas / fintech.",
      "Tecnologías utilizadas: NextJS (ReactJs), TypeScript, NodeJs, Tailwind, Git/Github, GraphQL, Playwright, Prisma y Docker.",
      "Herramientas de diseño: Figma, Scallidraw.",
      "Metodologías ágiles: Kanban (y conocimiento de Scrum).",
      "Trabajo en equipo multicontinental con comunicación en inglés para pull requests, documentación de issues, reuniones diarias, etc.",
      "Compromiso con la comunicación abierta y transparente para asegurar la entrega oportuna de proyectos y lograr resultados exitosos.",
      "Experiencia en cumplir con plazos ajustados, objetivos y entregas a tiempo, así como en la limpieza de código y refactorización para optimizar rendimiento y escalabilidad del software.",
    ],
    skills: [
      "Bases de datos",
      "Pruebas de software",
      "Repositorio",
      "Optimización de procesos",
      "Bilingüe (Español-Inglés)",
      "JavaScript",
      "Hojas de estilos en cascada (CSS)",
      "Next.js",
      "Metodologías de desarrollo de software",
      "TypeScript",
      "Inteligencia artificial",
      "React.js",
      "HTML5",
      "Tailwind",
      "Git",
    ],
  },
  {
    role: "Especialista en Administración de Datos y Desarrollo de Software para Campañas Publicitarias",
    company: "Making Publicidade",
    location: "Brasil (remoto)",
    dates: "octubre de 2022 - abril de 2023",
    responsibilities: [
      "Administración de bases de datos de campañas publicitarias para empresas internacionales como Nubank, Santander, Itau, Paschoalotto, Natura, Avon, Panfixa, entre otros.",
      "Programación con Python para la ejecución de envíos de campañas publicitarias, recepción y visualización de datos mediante MS Excel.",
      "Uso experto de múltiples servidores remotos y Dropbox para la eficiencia en la gestión de datos.",
      "Optimización y mantenimiento de código en procesos de control de datos y programación con Python para asegurar la eficacia y estabilidad en campañas publicitarias.",
      "Ingreso, análisis y auditoría de datos de facturación diaria y mensual de campañas publicitarias, implementando soluciones automatizadas y software para mejorar eficiencia y precisión.",
    ],
    skills: [
      "Bases de datos",
      "Python",
      "Pruebas de software",
      "Repositorio",
      "Optimización de procesos",
      "Bilingüe (Español-Inglés)",
      "Introducción de datos",
      "Portugués brasileño",
      "Análisis de datos",
    ],
  },
  {
    role: "Analista y Auditor informático de bases de datos (Data Analytics and Auditor IT)",
    company: "No especificada",
    location: "Brasil y Argentina",
    dates: "abril de 2022 - mayo de 2022 (2 meses)",
    responsibilities: [
      "Supervisión y auditoría de bases de datos informáticas.",
      "Análisis de datos para asegurar el correcto funcionamiento de las bases de datos.",
      "Implementación de mejoras en los sistemas de gestión de datos.",
      "Supervisión del personal administrativo en procesamiento de datos.",
      "Análisis y auditoría de datos para mejorar la eficiencia operativa.",
      "Implementación de prácticas para reducir errores y pérdidas monetarias.",
    ],
    skills: [
      "Bases de datos",
      "Auditoría informática",
      "Análisis de datos",
      "Supervisión administrativa",
      "Análisis de datos",
      "Optimización de procesos",
    ],
  },
  {
    role: "Desarrollador de proyecto Front-End (Sitio Web)",
    company: "Proyecto SUD",
    location: "Provincia de Buenos Aires, Argentina",
    dates: "enero de 2022 - marzo de 2022",
    responsibilities: [
      "Diseño de un sitio web 100% responsive aplicando los mejores principios de diseño.",
      "Desarrollo de las cinco secciones utilizando lenguajes de Frontend.",
      "Implementación y uso de APIs REST para mejorar la comunicación y funcionalidad del sitio.",
      "Diseño gráfico de imágenes y videos, y agregado de funcionalidad de descarga de archivos.",
      "Resolución del 90% de problemas de características que no funcionaban, utilizando soluciones creativas.",
    ],
    skills: ["Atención al detalle", "Atención al cliente"],
  },
];

export default function ProfessionalExperiencesPage() {
  return (
    <>
      <PageHeader
        title="Experiencias Profesionales"
        goBackRoute={"/"}
        goBackText={"Volver al Inicio"}
      />
      <PageBody>
        <div className="relative overflow-hidden py-10">
          <div className="absolute inset-y-0 left-1/2 w-1 bg-blue-500"></div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500 relative">
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-gray-400">{experience.time}</p>
                  <p className="text-sm text-gray-400">{experience.location}</p>
                  <ul className="mt-2 text-gray-300">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageBody>
    </>
  );
}
