const categories = [
    'မီးစက်',
    'ဘက်ထရီ',
    'အင်ဗာတာ',
    'ဆိုလာ',
    'ရေမော်တာ',
]

export default function Sidebar({ menuOpen }) {
    if (!menuOpen) return null

    return (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-4">
            <div className="flex flex-wrap gap-3">
                {categories.map((item, index) => (
                    <button
                        key={index}
                        className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3 transition hover:border-yellow-400 hover:text-yellow-400"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

