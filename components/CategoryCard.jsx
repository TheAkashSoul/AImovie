export default function CategoryCard({ title, badge, badgeColor, description }){
    return(
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className={`mt-2 text-sm text-white ${badgeColor && badgeColor} w-fit px-2 rounded-full`}>{badge && badge}</div>
            </div>
            <div className="p-4">
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
        
    )
}