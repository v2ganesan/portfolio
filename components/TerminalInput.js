"use client"
import { useEffect, useRef } from "react"

export default function TerminalInput({ value, onChange, onEnter }) {
    const textareaRef = useRef(null)
    const hiddenRef = useRef(null)

    // using this to dynamically increase the width of the text area so that it looks like its following the cursor
    useEffect(() => {
        if (textareaRef.current && hiddenRef.current) {
            // get the width of one char to compare to the actual state val
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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (onEnter) onEnter()
        }
    }

    const handleChange = (e) => {
        const newValue = e.target.value.replace(/\n/g, '')
        onChange(newValue)
    }

    return (
        <div className="flex flex-row flex-nowrap text-left ml-[5px] mt-[5px] text-sm mb-2">
            <span className="text-[#865312] whitespace-nowrap">v2@admin: </span>
            <span className="justify-center whitespace-nowrap">  ~ $ </span>
            <div className="flex flex-row flex-nowrap">
                <div className="relative inline-block my-auto">
                    <span ref={hiddenRef} className="invisible absolute whitespace-pre text-sm" style={{ fontFamily: 'inherit' }}> </span>
                    <textarea 
                        ref={textareaRef}
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        className="flex flex-row h-8 border-none bg-transparent resize-none outline-none text-gray-800 dark:text-gray-100 ml-[1ch] whitespace-nowrap overflow-hidden caret-transparent"
                        style={{ width: '0ch' }}
                        autoFocus
                    />
                </div>
                <span className="block bg-gray-800 dark:bg-white h-[20px] w-[5px] animate-[curbl_1200ms_linear_infinite] flex-shrink-0 ml-[0px]"></span>
            </div>
        </div>
    )
}