import { Sneaker } from "~/types/sneaker";

interface ProductCartProps {
    sneaker: Sneaker;
}

export default function SneakerCard({ sneaker }: ProductCartProps) {
    return (
        <div className="rounded-lg border bg-gray-400/10 flex flex-col h-full">
            <div className="rounded-lg border bg-gray-400/10 flex flex-col h-full">
                <img src={sneaker.image_url}
                    alt={sneaker.name}
                    className="w-full h-48 object-contain bg-white mx-auto transition duration-500 group-hover:scale-105 " />
            </div>

            <div className="flex flex-col flex-grow gap-y-4 px-4 py-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900">{sneaker.name}</h3>
                <p className="text-gray-700">
                    ${sneaker.price}
                </p>
            </div>

        </div>

    );
}
