'use client'
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function ExperienceCard({ Title, Dates, BulletPoints }) {
    const [isFlipped, flip] = useState(false)

    const cardBase = "w-[360px] h-[290px] rounded-2xl flex flex-col border border-gray-200 dark:border-[#333] shadow-md overflow-hidden cursor-pointer"

    return (
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className={cardBase} onClick={() => flip(true)}>
                <div className="bg-[#865312] px-4 py-3 flex-shrink-0">
                    <h1 className="text-white text-sm font-semibold leading-snug">{Title}</h1>
                    <p className="text-[#f5c98a] text-xs mt-0.5">{Dates}</p>
                </div>
                <div className="flex-1 flex flex-col p-4 bg-white dark:bg-[#171717]">
                    {BulletPoints.length > 0 ? (
                        <>
                            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-6">
                                {BulletPoints[0]}
                            </p>
                            {BulletPoints.length > 1 && (
                                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-auto pt-2">
                                    +{BulletPoints.length - 1} more &middot; click to see all
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-xs text-gray-400 dark:text-gray-500 italic mt-auto mb-auto text-center">
                            Details coming soon
                        </p>
                    )}
                </div>
            </div>

            <div className={cardBase} onClick={() => flip(false)}>
                <div className="bg-[#865312] px-4 py-3 flex-shrink-0">
                    <h1 className="text-white text-sm font-semibold leading-snug">{Title}</h1>
                    <p className="text-[#f5c98a] text-xs mt-0.5">{Dates}</p>
                </div>
                <div className="flex-1 flex flex-col p-4 bg-white dark:bg-[#171717] overflow-y-auto gap-2">
                    {BulletPoints.map((point, i) => (
                        <p key={i} className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                    ))}
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-auto pt-2 text-right">
                        click to flip back
                    </p>
                </div>
            </div>
        </ReactCardFlip>
    )
}
