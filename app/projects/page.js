import ExperienceCard from "@/components/experienceCard"
import { PlatePal, EasyCalendar, JobTrackerAgent } from "../constants"

export default function Projects (){
    return (
        <div className="experience-container">
            <h1> Projects </h1>
            <div className="cards-wrapper">
                <ExperienceCard Title="Job Application Tracker Agent" Dates="Sept 2025 - " BulletPoints={JobTrackerAgent}></ExperienceCard>
                <ExperienceCard Title="Easy Calendar" Dates="Dec 2024 - Feb 2025"BulletPoints={EasyCalendar}></ExperienceCard>
                <ExperienceCard Title="Plate Pal" Dates="Feb 2023 - May 2023" BulletPoints={PlatePal}></ExperienceCard>
            </div>
        </div>

    )
}