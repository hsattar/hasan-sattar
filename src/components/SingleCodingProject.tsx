interface IProps {
    image: string
    link: string
    title: string
    description: string
}

export default function SingleCodingProject({ image, link, title, description }: IProps) {
    return (
        <section className="flex">
        <div className="flex justify-center items-center min-w-[50%] max-w-[50%]">
            <img src={image} alt=""/>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
            <a href={link} target="_blank" rel="noopener">
                <h5 className="text-center text-2xl font-medium my-2">{title}</h5>
            </a>
            <p className="text-center">{description}</p>
        </div>
        </section>
    )
}