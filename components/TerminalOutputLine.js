"use client"
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

export default function TerminalOutputLine({ command, response, animate, animationDone }) {
    //
    const [startResponse, setStartResponse] = useState(false);

    return (
        <div className="flex flex-col text-left ml-[5px] mt-[5px] text-sm mb-2">
             <div className="flex flex-row">
                <span className="text-[#865312] whitespace-nowrap">v2@admin: </span>
                <span className="justify-center whitespace-nowrap">  ~ $ </span>

                <span className="whitespace-nowrap ml-2 flex flex-row">
                    {animate ? (
                        <>
                            <TypeAnimation 
                                sequence={[
                                    command,
                                    500, // emulate the pause before pressing enter 
                                    () => setStartResponse(true)
                                ]}
                                wrapper="span" 
                                speed={30} 
                                cursor={false} 
                            />
                            {!startResponse && (
                                <span className="block bg-gray-800 dark:bg-white h-[20px] w-[5px] animate-[curbl_1200ms_linear_infinite] ml-[0px]"></span>
                            )}
                        </>
                    ) : (
                        command
                    )}
                </span>
             </div>
            <div className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap ml-[5px] mt-1">
                {animate ? (
                    startResponse && (
                    <TypeAnimation sequence={[response, () => animationDone()]} wrapper="span" speed={30} cursor={false}/>
                )) : (
                    response
                )}
            </div>
        </div>
    )
}