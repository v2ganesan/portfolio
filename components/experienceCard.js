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
            <div className="card" onClick={flipCard}>
                <h1>{Title}</h1>
                <h3>{Dates}</h3>
                
                {BulletPoints.map((BulletPoint, index) => {
                    return <h2 key={index}>{BulletPoint}</h2>
                })}
            </div>

            <div className="card" onClick={flipCard}>
                <h1>Key Takeaways</h1>
            </div>
        </ReactCardFlip>
    )
}