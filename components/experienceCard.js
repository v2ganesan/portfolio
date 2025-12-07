'use client'
import ReactCardFlip from "react-card-flip";
import { useState } from "react";


export default function ExperienceCard ( {Title, Dates, BulletPoints}) {
    
    const [isFlipped, flip] = useState(false)

    const flipCard = () => {
        flip(!isFlipped)
    }

    return (
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className=" w-[350px] h-[250px] rounded-[20px] flex flex-col border-2 border-[#865312] mt-[5px]" onClick={flipCard}>
                <h1 className="flex justify-center mt-[5px] text-xl">{Title}</h1>
                <h3 className="flex flex-col text-center mt-0 mb-[5px]">{Dates}</h3>
                <div className="flex-1 flex flex-col justify-center">
                    {BulletPoints.map((BulletPoint, index) => {
                        return <h2 className="text-[10px] flex flex-col text-center mx-[5px] mt-[5px]" key={index}>{BulletPoint}</h2>
                    })}
                </div>
            </div>

            <div className=" w-[350px] h-[250px] rounded-[20px] flex flex-col border-2 border-[#865312] mt-[5px]" onClick={flipCard}>
                <h1>Key Takeaways</h1>
            </div>
        </ReactCardFlip>
    )
}