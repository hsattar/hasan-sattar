import SingleTechnology from "./SingleTechnology"
import technologies from '../../data/technologies'

export default function TechStack() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-10 select-none">Tech Stack</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 max-w-[1000px] place-items-center place-content-center">
                { technologies.map((technology, index) => <SingleTechnology key={index} {...technology} />) }
            </div>
        </div>
        </>
    )
}