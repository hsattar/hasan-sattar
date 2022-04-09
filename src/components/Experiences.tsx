import SingleExperience from "./SingleExperience"

export default function Experiences() {

    const experiences: IExperience[] = [{
        year: "2021 - 2022",
        title: "Strive School",
        description: "6 Month Coding Bootcamp Studying Full Stack Development.",
        type: "education"
    }, {
        year: "2020 - 2021",
        title: "SAE Institute - University",
        description: "Studied Web Development.",
        type: "education"
    }, {
        year: "2018 - 2021",
        title: "WHSmith",
        description: "Team Leader.",
        type: "work"
    }]

    return (
        <div className="select-none">
        <h2 id="education-section" className="text-center text-4xl font-semibold mb-8 mt-16">Experiences</h2>
        <section className="experience-section">
            { experiences.map((experience, index) => <SingleExperience key={index} {...experience} />) }
        </section>
        </div>
    )
}