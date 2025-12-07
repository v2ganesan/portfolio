import ExperienceCard from "@/components/experienceCard"
import { PlatePal, EasyCalendar, JobTrackerAgent } from "../constants"

export default function Projects (){
    return (
        <div className="flex flex-col text-center -mt-2.5 gap-5">
            <h1 className="text-xl"> Professional Experiences </h1>
            <div className="flex flex-row gap-5 flex-wrap justify-center">
                <ExperienceCard Title="Job Application Tracker Agent" Dates="Sept 2025 - " BulletPoints={JobTrackerAgent}></ExperienceCard>
                <ExperienceCard Title="Easy Calendar" Dates="Dec 2024 - Feb 2025"BulletPoints={EasyCalendar}></ExperienceCard>
                <ExperienceCard Title="Plate Pal" Dates="Feb 2023 - May 2023" BulletPoints={PlatePal}></ExperienceCard>
            </div>
        </div>

    )
}