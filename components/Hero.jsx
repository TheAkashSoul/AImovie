import Link from "next/link";


export default function Hero(){
    return(
    <section>
        <div className="px-4 md:px-6 py-4">
          <input
            className="w-64 h-10 px-5 rounded-md text-sm focus:outline-none bg-white"
            placeholder="Search movies..."
            type="search"
          />
        </div>
        
        <main className="w-full py-12 text-white">

        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col justify-center space-y-4 w-full">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none">Welcome to AImovie</h1>
              <p className="max-w-[600px] text-lg">
                Explore AI generated movies from various categories. Start your journey now!
              </p>
              <div className="flex gap-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:shadow-md hover:shadow-slate-700"
                  href="#catrgory"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:shadow-md hover:shadow-slate-700"
                  href="/"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last bg-white"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </main>
    </section>
    )
}