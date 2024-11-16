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
      <section
        className="relative bg-[url(/wallsneaker.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative justify-end max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-right ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-5xl font-extrabold text-rose-500 sm:text-7xl md:text-8xl lg:text-10xl xl:text-[10rem]">
              40%
              <strong className="block font-extrabold text-rose-500 text-4xl">
                off
              </strong>
            </h1>




            <div className="mt-8 flex flex-wrap gap-4 text-center items-start">
              <Link
                to={'/sneakers'}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Ver ofertas
              </Link>


            </div>
          </div>
        </div>
      </section>
    </div>


  )
}


