'use client'
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/">
          <h3 className="text-2xl">Ezequiel Tartaglia Portfolio (beta)</h3>
        </Link>

        <ul className="flex space-x-4">
         
          <li className="pr-4">
            <Link href="/projects" className="text-sky-500 hover:text-sky-400">
              Proyectos
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
