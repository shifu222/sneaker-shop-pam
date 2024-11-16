import { Link, useLoaderData } from "@remix-run/react"
import Navbar from "~/components/navbar"
import SneakerCard from "~/components/sneaker-card"
import GetSneakers from "~/db/querys/get-sneakers"
import {Sneaker} from "~/types/sneaker"


export async function loader() {
    const sneaker = await GetSneakers();
    return sneaker;
}

export default function Sneakers() {
    const rows: Sneaker[] = useLoaderData()
    console.log(rows)
    return (

        <div>
            <Navbar />
            <div className="w-full max-w-6xl px-4 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {rows.map((sneaker) =>
                    <Link to={'/sneakers/' + sneaker.slug} key={sneaker.sneaker_id} className="group relative block overflow-hidden">
                        <SneakerCard sneaker={sneaker} />
                    </Link>)}
            </div>
        </div>



    )
}