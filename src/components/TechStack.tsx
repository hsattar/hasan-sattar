import SingleTechnology from "./SingleTechnology"

export default function TechStack() {

    const technologies:ITechnologies[] = [{
        technology: 'HTML',
        color: 'bg-orange-500',
        shadow: 'shadow-orange-500/50'
    }, {
        technology: 'CSS',
        color: 'bg-blue-400',
        shadow: 'shadow-blue-400/50'
    }, {
        technology: 'Bootstrap',
        color: 'bg-purple-600',
        shadow: 'shadow-purple-600/50'
    }, {
        technology: 'Tailwind',
        color: 'bg-sky-400',
        shadow: 'shadow-sky-400/50'
    }, {
        technology: 'JavaScript',
        color: 'bg-yellow-300',
        shadow: 'shadow-yellow-300/50'
    }, {
        technology: 'TypeScript',
        color: 'bg-blue-500',
        shadow: 'shadow-blue-500/50'
    }, {
        technology: 'React',
        color: 'bg-blue-500',
        shadow: 'shadow-blue-500/50'
    }, {
        technology: 'Redux',
        color: 'bg-purple-500',
        shadow: 'shadow-purple-500/50'
    }, {
        technology: 'Node.js',
        color: 'bg-green-500',
        shadow: 'shadow-green-500/50'
    }, {
        technology: 'Express',
        color: 'bg-gray-900',
        shadow: 'shadow-gray-900/50'
    }, {
        technology: 'MongoDB',
        color: 'bg-green-600',
        shadow: `shadow-green-600/50`
    }, {
        technology: 'Vercel',
        color: 'bg-gray-900',
        shadow: 'shadow-gray-900/50'
    }]

    return (
        <>
        <h2 className="text-center text-3xl font-semibold mb-6 select-none">Tech Stack</h2>
        <div className="flex justify-center select-none">
            <div className="grid grid-cols-4 gap-12 max-w-[1000px] place-items-center place-content-center">
                { technologies.map((technology, index) => <SingleTechnology key={index} {...technology} />) }
            </div>
        </div>
        </>
    )
}
