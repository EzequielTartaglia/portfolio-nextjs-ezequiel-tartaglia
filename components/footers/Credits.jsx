"use client";

import Link from "next/link";

export default function Credits() {
  const developerInfo = {
    name: "Ezequiel",
    middleName: "Matias",
    surname: "Tartaglia",
    email: "ezequielmtartaglia@gmail.com",
    linkedin: "https://www.linkedin.com/in/ezequieltartaglia",
    github: "https://github.com/ezequieltartaglia",
  };

  // Extraer la primera letra del segundo nombre
  const middleInitial = developerInfo.middleName ? developerInfo.middleName.charAt(0) : '';

  // Obtener el año actual
  const currentYear = new Date().getFullYear();

  return (
      <div className="bg-zinc-900 text-white p-1 text-center">
        Ezequiel M. Tartaglia Portfolio &#174; | Desarrollado por {" "}
        <Link
          href={developerInfo.linkedin}
          className="text-title-active inline-flex items-center justify-center"
        >
           {developerInfo.name} {middleInitial}. {developerInfo.surname}
        </Link>
        {" "} | Todos los derechos reservados {currentYear}&copy;
      </div>
  );
}
