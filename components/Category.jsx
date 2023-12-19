import CategoryCard from "./CategoryCard";

export default function Category(){
    return(
        <section id="catrgory" className="px-4 mx-auto md:px-6 py-12">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-white text-3xl">Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                    <CategoryCard title="Action" badge="Hot" badgeColor="bg-red-500" description="Thrilling and heart-stopping adventures." />
                    <CategoryCard title="Drama" badge="New" badgeColor="bg-blue-500" description="Emotional journeys and compelling narratives." />
                    <CategoryCard title="Comedy" badge="New" badgeColor="bg-blue-500" description="Hilarious and light-hearted fun." />
                    <CategoryCard title="Sci-Fi" badge="Top" badgeColor="bg-orange-500" description="Futuristic and out-of-this-world experiences." />
                </div>
            </div>
        </section>
    )
}