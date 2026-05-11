export default function ProductCard({ item }) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-yellow-400">
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.model}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4 p-5">
                <div>
                    <h3 className="text-2xl font-bold">
                        {item.brand} {item.model}
                    </h3>

                    <p className="mt-2 text-yellow-400">{item.kw}kW</p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
                        {item.type}
                    </span>

                    <span className="text-lg font-semibold text-green-400">
                        {item.price}
                    </span>
                </div>
            </div>
        </div>
    )
}

