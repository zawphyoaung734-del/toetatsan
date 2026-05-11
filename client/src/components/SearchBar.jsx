export default function SearchBar({ search, setSearch }) {
    return (
        <div className="mb-8">
            <h2 className="mb-3 text-3xl font-bold">
                Premium Generator Inventory
            </h2>

            <p className="mb-6 text-zinc-400">
                Search by brand, model, kW or inverter type.
            </p>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Jelist, 6500, inverter..."
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-lg outline-none transition focus:border-yellow-400"
            />
        </div>
    )
}

