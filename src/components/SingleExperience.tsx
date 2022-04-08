interface IProps {
    year: string
    title: string
    description: string
    type: string
}

export default function SingleExperience({ year, title, description, type }: IProps) {
    return (
        <div className={`experience-container ${type === 'education' ? 'education' : 'work'}`}>
        
            <div className={`date-container ${type === 'education' ? 'education-date' : 'work-date'}`}>
                <h3>{year}</h3>
            </div>

            <div className="experience-information">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    )
}
