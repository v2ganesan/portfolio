import ExperienceCard from "@/components/experienceCard"
import { USAA, Experian, Veeva } from "../constants"

export default function Experience (){
    return (
        <div className="flex flex-col text-center -mt-2.5 gap-5">
            <h1 className="text-xl"> Professional Experiences </h1>
            <div className="flex flex-row gap-5 flex-wrap justify-center">
                <ExperienceCard Title="Incoming Software Engineer Intern @ Veeva Systems" Dates="May 2026 - Aug 2026" BulletPoints={Veeva}></ExperienceCard>
                <ExperienceCard Title="Software Engineer Intern @ USAA" Dates="May 2025 - Aug 2025" BulletPoints={USAA}></ExperienceCard>
                <ExperienceCard Title="Software Engineer Intern @ Experian" Dates="June 2023 - Sept 2023" BulletPoints={Experian}></ExperienceCard>
            </div>
        </div>

    )
}