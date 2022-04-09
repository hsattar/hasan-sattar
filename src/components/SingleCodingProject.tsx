interface IProps {
    image: string
    link: string
    title: string
    subtitle: string
    description: string
    technologies: string
    direction: string
}

export default function SingleCodingProject({ image, link, title, subtitle, description, technologies, direction }: IProps) {
    return (
        <section className={`flex ${direction} p-4 select-none`}>
            <div className="flex justify-center items-center min-w-[50%] max-w-[50%]">
                <img src={image} className="w-[65%]" alt=""/>
            </div>
            <div className="flex flex-grow flex-col justify-between items-center text-center py-8">
                <a href={link} target="_blank" rel="noreferrer">
                    <h4 className="text-center text-2xl font-medium">{title}</h4>
                    <h5 className="mb-3">{subtitle}</h5>
                </a>
                <p className="mb-2">{description}</p>
                <p className="text-sm text-gray-600">{technologies}</p>
            </div>
        </section>
    )
}