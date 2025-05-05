import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";

// Images from logo
import byuIdahoLogo from "../../../public/assets/education/byu_idaho_logo.jpg";
import coderhouseLogo from "../../../public/assets/education/coderhouse_logo.jpg";
import ibmLogo from "../../../public/assets/education/ibm_logo.jpg";
import unJuLogo from "../../../public/assets/education/unju_logo.jpg";
import googleLogo from "../../../public/assets/education/google_logo.jpg";
import gcbaLogo from "../../../public/assets/education/gcba_logo.jpg";
import udemyLogo from "../../../public/assets/education/udemy_logo.jpg";
import openBootcampLogo from "../../../public/assets/education/openbootcamp_logo.jpg";
import masEducationLogo from "../../../public/assets/education/mas_education_logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDriversLicense, faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

const higherEdAndSpecializations = [
  {
    title:
      "Bachelor Degree of Applied Science in Software Development",
    institution: "Brigham Young University - Idaho",
    dates: "Abr. 2022 - Jun. 2025",
    description: "Licenciatura en Ingeniería en Desarrollo de Software",
    logo: byuIdahoLogo,
  },
  {
    title: "Associate of Applied Science in Applied Technology",
    institution: "Brigham Young University - Idaho",
    dates: "Abr. 2022 - May. 2024",
    description:
      "Tecnico Universitario en Tecnología Aplicada (Analista de sistemas)",
    logo: byuIdahoLogo,
  },
  {
    title: "Web Development Certificate",
    institution: "Brigham Young University - Idaho",
    dates: "May. 2024 - Dic. 2024",
    description: "Titulación: A (mayor a 92%)",
    logo: byuIdahoLogo,
  },
  {
    title: "Database Certificate",
    institution: "Brigham Young University - Idaho",
    dates: "Abr. 2023 - May. 2024",
    description: "Titulación: A (mayor a 92%)",
    logo: byuIdahoLogo,
  },
  {
    title: "Web & Computing programming Certificate",
    institution: "Brigham Young University - Idaho",
    dates: "Sept. 2021 - Jul. 2022",
    description: "Titulación: A (mayor a 92%)",
    logo: byuIdahoLogo,
  }
];

const courses = [
  {
    title: "Databases and SQL for Data Science with Python",
    institution: "IBM",
    dates: "Dic. 2023",
    description: "",
    logo: ibmLogo,
  },
  {
    title: "Introducción al análisis estadístico con Python",
    institution: "Universidad Nacional de Jujuy",
    dates: "Dic. 2023",
    description: "",
    logo: unJuLogo,
  },
  {
    title: "Technical Support Fundamentals",
    institution: "Google",
    dates: "Dic. 2023",
    description: "",
    logo: googleLogo,
  },
  {
    title: "Fullstack Python - Codo a codo 4.0",
    institution: "Gobierno de la Ciudad de Buenos Aires",
    dates: "Jun. 2023",
    description: "",
    logo: gcbaLogo,
  },
  {
    title: "Master en SQL Server",
    institution: "Udemy",
    dates: "May. 2023",
    description: "",
    logo: udemyLogo,
  },
  {
    title: "Javascript",
    institution: "Coderhouse",
    dates: "Mar. 2022 - May. 2022",
    description: "",
    logo: coderhouseLogo,
  },
  {
    title: "Introducción a la programación",
    institution: "OpenBootcamp",
    dates: "Nov. 2022",
    description: "",
    logo: openBootcampLogo,
  },
  {
    title: "Microsoft Office Specialist",
    institution: "Instituto MAS",
    dates: "Feb. 2015",
    description: "",
    logo: masEducationLogo,
  }
];

const CertificateCard = ({ certificate }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-secondary-light">
      <div className="flex items-center mb-4">
        <Image
          src={certificate.logo}
          alt={`${certificate.institution} Logo`}
          className="h-12 w-12 mr-3"
        />
        <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
      </div>
      <p className="text-sm text-gray-400">{certificate.dates}</p>
      <p className="text-sm text-gray-400">{certificate.institution}</p>
      <p className="mt-2 text-gray-300">{certificate.description}</p>
    </div>
  </div>
);

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        title="Certificados y Licencias"
        goBackRoute={"/"}
        goBackText={"Volver al Inicio"}
      />
      <PageBody>
        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 max-w-[100%] border-secondary-light">
          <h2 className="text-3xl text-teal-500 mb-6 flex">
            <FontAwesomeIcon
              icon={faDriversLicense}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            Educación superior y especializaciones
          </h2>
          <div className="flex flex-wrap">
            {higherEdAndSpecializations.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>
        </div>
        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 max-w-[100%] border-secondary-light">
          <h2 className="text-3xl text-teal-500 mb-6 flex">
            <FontAwesomeIcon
              icon={faFileCircleCheck}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            Cursos
          </h2>
          <div className="flex flex-wrap">
            {courses.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </div>
        </div>
      </PageBody>
    </>
  );
}
