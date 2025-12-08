"use client"

import { useState, useRef, useEffect} from "react"
import { Commands } from "@/app/constants";
import localFont from "next/font/local"
import TerminalHistory from "./TerminalHistory"
import TerminalInput from "./TerminalInput"

const sfMono = localFont({
    src: "../public/fonts/sfmono/SF-Mono-Regular.otf",
});

export default function HomeTerminal () {
    const [value, setValue] = useState("")
    const [chatHistory, setChatHistory] = useState({ 1: ["v2 welcome", Commands["v2 welcome"]] })
    const [isWelcomeDone, setIsWelcomeDone] = useState(false)
    const scrollRef = useRef(null)

    const handleDone = () => { setIsWelcomeDone(true) };
    
    const handleCommand = () => {
        const command = value
        if (!command) return;

        const response = Commands[command] || `Command not found: ${command}. Type 'help' for available commands.`;
        
        const newId = Object.keys(chatHistory).length + 1;
        setChatHistory(prev => ({
            ...prev,
            [newId]: [command, response]
        }));
        setValue("");
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div 
            ref={scrollRef}
            className={`h-[550px] w-[500px] mx-auto my-auto flex flex-col rounded-0 overflow-y-auto border-2 border-[#865312] bg-white dark:bg-[#171717] p-2 ${sfMono.className}`}
        >
            <TerminalHistory animationDone={handleDone} chatHistory={chatHistory} />
            {isWelcomeDone && (
                <TerminalInput 
                value={value}
                onChange={setValue}
                onEnter={handleCommand}
                />
            )}
        </div>
    )
}