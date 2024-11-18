import { useState } from "react";
import { Link } from "@remix-run/react"; // Importa Link si estás usando React Router

export default function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-rose-600 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav aria-label="Global" className="flex items-center gap-6 text-sm">
        <a className="text-white transition px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-none dark:text-gray-200 hover:border-b-2 hover:border-white-700 md:mx-2" href="#" > Inicio </a>
        <a className="text-white transition px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-none dark:text-gray-200 hover:border-b-2 hover:border-white-700 md:mx-2" href="#" > About </a>
        <a className="text-white transition px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-none dark:text-gray-200 hover:border-b-2 hover:border-white-700 md:mx-2" href="#" > Contacto </a>
        </nav>

        <div className="relative ml-auto mr-4"> 
          <label htmlFor="Search" className="sr-only">Search</label>

          <input
            type="text"
            id="Search"
            placeholder="Buscar"
            className="w-full rounded-md py-2 pe-10 ps-4 shadow-sm sm:text-sm text-black bg-white focus:outline-none"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>

        {/* Botones separados */}
        <div className="flex items-center gap-4"> {/* `gap-4` ajusta la separación */}
          <a
            className="flex items-center justify-center block w-full border-2 border-rose-700 bg-rose-700  rounded px-6 py-2 text-sm font-medium text-white shadow hover:bg-rose-500 hover:border-rose-500 active:bg-rose-600  active:border-rose-600 sm:w-auto"
            href="#"
          >
            Login
          </a>
          <a
            className="flex items-center justify-center hidden border-2 border-gray-100 rounded-md bg-gray-100 px-6 py-2 text-sm font-medium text-black transition hover:bg-white hover:border-white sm:block active:bg-gray-300 active:border-gray-300"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}