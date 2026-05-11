export default function Navbar({ setMenuOpen }) {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="rounded-xl border border-zinc-700 p-3 text-xl"
                >
                    ☰
                </button>

                <h1 className="text-2xl font-bold tracking-widest text-yellow-400">
                    တိုးတက်စံ
                </h1>
            </div>
        </header>
    )
}

