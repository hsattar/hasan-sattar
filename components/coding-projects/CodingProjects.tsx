import SingleCodingProject from "./SingleCodingProject"
import codingProjects from '../../data/codingProjects'

export default function CodingProjects() {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-8 select-none">Coding Projects</h2>
        { codingProjects.map((project, index) => <SingleCodingProject key={index} {...project} />) }
        </>
    )
}