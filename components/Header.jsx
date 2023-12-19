import Link from "next/link";

export default function Header(){
    return(
        <header className="flex h-20 w-full items-center justify-between gap-4 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-blue-500">

            <Link href="/">
            <h1 className="text-2xl text-white font-bold ">AImovie</h1>
            </Link>

            <button className="bg-white text-black font-bold px-3 py-1 rounded-full hover:shadow-sm hover:shadow-slate-800">Log in</button>

        </header>
    )
}