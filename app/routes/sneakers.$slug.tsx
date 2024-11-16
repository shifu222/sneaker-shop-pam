import { useLoaderData } from "@remix-run/react";
import { Sneaker } from "~/types/sneaker"
import SneakerCard from "~/components/sneaker-card";
import Navbar from "~/components/navbar";
import GetSneakersSlug from "~/db/querys/get-sneaker-slug";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
    const sneaker = await GetSneakersSlug(params.slug as string);
    return sneaker;
}




export default function SneakerDetail() {

    const sneaker: Sneaker = useLoaderData();

    console.log(sneaker);
    return (
        <div>
            <Navbar />
            <SneakerCard sneaker={sneaker} />

        </div>

    )


}