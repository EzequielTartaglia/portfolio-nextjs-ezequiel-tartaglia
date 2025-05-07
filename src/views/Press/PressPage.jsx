import PageBody from "@/components/page_formats/PageBody";
import PageHeader from "@/components/page_formats/PageHeader";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

// Logos
import laNacionLogo from "../../../public/assets/press/la_nacion_logo.jpg";

const periodicalsAndReviews = [
  {
    title:
      "Prompting, ética y entrenamiento de la IA: lo que todos debemos saber antes de interactuar con una inteligencia artificial",
    outlet: "Revista Ohlalá! (La Nación)",
    date: "Junio 2025",
    logo: laNacionLogo,
    description: "Nota de prensa y capacitación en Prompting Engineering para IA Generativa - Revista Ohlalá! (La Nación)",
    link: "",
  },
];


const PressCard = ({ item }) => (
  <div className="w-full md:w-1/2 p-4">
    <a
      href={item.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-900 p-6 rounded-lg shadow-lg border border-secondary-light hover:bg-gray-800 transition-all"
    >
      <div className="flex items-center mb-4">
        <Image
          src={item.logo}
          alt={`${item.outlet} Logo`}
          className="h-12 w-12 mr-3"
        />
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
      <p className="text-sm text-gray-400">{item.date}</p>
      <p className="text-sm text-gray-400">{item.outlet}</p>
      <p className="mt-2 text-gray-300">{item.description}</p>
    </a>
  </div>
);

export default function PressPage() {
  return (
    <>
      <PageHeader
        title="Apariciones en Prensa y Medios"
        subtitle="Entrevistas, notas y participaciones en medios de comunicación."
        goBackRoute="/"
        goBackText="Volver al Inicio"
      />
      <PageBody>
        <div className="bg-gray-900 border-t-4 border-teal-500 p-10 mt-8 border-secondary-light">
        <h2 className="text-3xl text-teal-500 mb-6 flex">
            <FontAwesomeIcon
              icon={faNewspaper}
              className="w-8 h-8 mr-2 text-teal-400"
            />
            Notas en Revistas o Diarios
        </h2>
          <div className="flex flex-wrap">
            {periodicalsAndReviews.map((item, idx) => (
              <PressCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </PageBody>
    </>
  );
}
