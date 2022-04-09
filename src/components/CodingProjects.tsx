import SingleCodingProject from "./SingleCodingProject"

export default function CodingProjects() {

    const codingProjects: ICodingProjects[] = [{
        image: '/assets/code-buddy.jpg',
        link: "https://code-buddy.vercel.app",
        title: 'Code Buddy',
        subtitle: "Solo Project",
        description: "Code Buddy is a no-code platform that allows you to create websites and is simple to use.",
        technologies: "React, Redux, Tailwind CSS, Node.js, Express, MongoDB, TypeScript",
        direction: "md:flex-row"
    }, {
        image: '/assets/whatsapp.jpg',
        link: "https://strive-bw-4.vercel.app",
        title: 'WhatsApp Clone',
        subtitle: "Team Project",
        description: "A clone of the WhatsApp Web version that allows you to create groups and send messages.",
        technologies: "React, Redux, Material UI, Node.js, Express, MongoDB, TypeScript",
        direction: "md:flex-row-reverse"
    }]

    return (
        <>
        <h2 className="text-center text-4xl font-semibold my-8 select-none">Coding Projects</h2>
        { codingProjects.map((project, index) => <SingleCodingProject key={index} {...project} />) }
        </>
    )
}