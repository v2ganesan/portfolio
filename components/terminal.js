"use client"

import { useState, useRef, useEffect} from "react"
import { Commands } from "@/app/constants";
import localFont from "next/font/local"
import TerminalHistory from "./TerminalHistory"
import TerminalInput from "./TerminalInput"
import { useRouter } from 'next/navigation'


const sfMono = localFont({
    src: "../public/fonts/sfmono/SF-Mono-Regular.otf",
});

export default function HomeTerminal () {
    const [value, setValue] = useState("")
    const [chatHistory, setChatHistory] = useState({ 1: ["v2 welcome", Commands["v2 welcome"]] })
    const [isWelcomeDone, setIsWelcomeDone] = useState(false)
    const scrollRef = useRef(null)
    const router = useRouter()


    const handleDone = () => { setIsWelcomeDone(true) };
    
    const handleCommand = () => {
        const command = value
        if (!command) return;
        
        // if the command exists:
            // if the length of the comand result > 1 (this means its a cd command)
                // route to Commands[Command][0] and response = Commands[command][1]
        const isCdCommand = Array.isArray(Commands[command]);
        const response =  (Commands[command] ? 
                            (isCdCommand ? Commands[command][1]: Commands[command])
                            : 
                            `Command not found: ${command}. Type 'v2 help' for available commands.`
                          )                
        const newId = Object.keys(chatHistory).length + 1;
        setChatHistory(prev => ({
            ...prev,
            [newId]: [command, response]
        }));
        setValue("");

        if (isCdCommand)   {
                setTimeout(() =>{
                    router.push(Commands[command][0])
                }, 500)
        }
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className={`w-[500px] mx-auto my-auto flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-[#333] shadow-xl ${sfMono.className}`}>
            <div className="flex items-center bg-[#e8e8e8] dark:bg-[#2d2d2d] px-3 py-2 flex-shrink-0">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                </div>
                <span className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">v2@admin: ~ — bash</span>
            </div>
            <div
                ref={scrollRef}
                className="h-[520px] flex flex-col bg-white dark:bg-[#171717] p-2 overflow-y-auto"
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
        </div>
    )
}