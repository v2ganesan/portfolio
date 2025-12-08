"use client"

import { useState, useRef, useEffect} from "react"
import localFont from "next/font/local"

const sfMono = localFont({
    src: "../public/fonts/sfmono/SF-Mono-Regular.otf",
});


export default function HomeTerminal () {
    const [value, setValue] = useState("")
    const textareaRef = useRef(null)
    const hiddenRef = useRef(null)

    useEffect(() => {
        if (textareaRef.current && hiddenRef.current) {
            // Get the width of one char to compare to the actual state val
            hiddenRef.current.textContent = "M"
            const oneCharWidth = hiddenRef.current.offsetWidth
            
            // Measure the actual content
            hiddenRef.current.textContent = value || " "
            const contentWidth = hiddenRef.current.offsetWidth
            
            // Set width to at least 1ch, expanding based on content
            const newWidth = Math.max(oneCharWidth, contentWidth)
            textareaRef.current.style.width = `${newWidth}px`
        }
    }, [value])

    return (
        <div className= {`h-[550px] w-[500px] mx-auto my-auto flex flex-col rounded-0 overflow-y-auto border-2 border-[#865312] ${sfMono.className}`}>
            <div className="flex flex-row flex-nowrap text-left ml-[5px] mt-[5px] text-sm mx-auto">
                <span className="text-[#865312] whitespace-nowrap">varun@admin: </span>
                <span className="justify-center whitespace-nowrap">  ~ $ </span>
                <div className="flex flex-row flex-nowrap">
                    <div className="relative inline-block my-auto">
                        <span ref={hiddenRef} className="invisible absolute whitespace-pre text-sm" style={{ fontFamily: 'inherit' }}> </span>
                        <textarea 
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                const newValue = e.target.value.replace(/\n/g, '')
                                setValue(newValue)
                            }}
                            className="flex flex-row h-8 border-none bg-transparent resize-none outline-none text-gray-100 ml-[1ch] whitespace-nowrap overflow-hidden caret-transparent"
                            style={{ width: '0ch' }}
                        />
                    </div>
                    <span className="block bg-white h-[20px] w-[5px] animate-[curbl_1200ms_linear_infinite] flex-shrink-0 ml-[0px]"></span>
                </div>
            </div>
        </div>
    )
}