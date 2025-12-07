import ExperienceCard from "@/components/experienceCard"
import { USAA, Experian } from "../constants"

export default function Experience (){
    return (
        <div className="experience-container">
            <h1> Professional Experiences </h1>
            <div className="cards-wrapper">
                <ExperienceCard Title="Software Engineer Intern @ USAA" Dates="May 2025 - Aug 2025" BulletPoints={USAA}></ExperienceCard>
                <ExperienceCard Title="Software Engineer Intern @ Experian" Dates="June 2023 - Sept 2023"BulletPoints={Experian}></ExperienceCard>
            </div>
        </div>

    )
}