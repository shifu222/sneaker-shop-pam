import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <section className="relative bg-[url(/wallsneaker.jpg)] bg-cover bg-center bg-no-repeat w-full h-[500px] flex items-center justify-end">
        <div className="absolute inset-0 bg-gray-300/10"></div>

        <div className="relative flex justify-end items-center h-screen px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-right ml-auto">
            <h1 className="text-5xl text-rose-500 sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem]">
              <strong>40%</strong>
              <div className="block text-4xl">
                <strong>off</strong></div>
            </h1>

            <div className="mt-8 flex justify-end">
              <Link
                to={'/sneakers'}
                className="inline-block border-2 border-rose-500 bg-rose-500  rounded px-6 py-2 text-sm font-medium text-white shadow hover:bg-rose-600 hover:border-rose-600 active:bg-rose-400  active:border-rose-400 sm:w-auto"
              >
                Ver ofertas
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        catalogo
      </section>
    </div>


  )
}


