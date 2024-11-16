import { useState } from "react";
import { Link } from "@remix-run/react"; // Importa Link si estás usando React Router

export default function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Cambia el estado de isOpen
        className="md:hidden p-4 text-gray-700 dark:text-gray-200"
      >
        ☰ {/* Icono de hamburguesa */}
      </button>

      {/* Menú de navegación que se oculta/abre con la animación */}
      <div
        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 
        ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"} 
        md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
      >
        <div className="flex flex-col md:flex-row md:mx-6">
          <Link
            className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="#"
          >
            Hombre
          </Link>
          <Link
            className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="#"
          >
            Mujer
          </Link>
          <Link
            className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="#"
          >
            Niños
          </Link>
          <Link
            className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="#"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}


