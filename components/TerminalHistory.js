"use client"
import TerminalOutputLine from "./TerminalOutputLine"

export default function TerminalHistory({ chatHistory, animationDone }) {

    return (
        <div className="flex flex-col w-full">
            {Object.entries(chatHistory).map(([id, [command, response]], index) => (
                <TerminalOutputLine 
                    key={id}
                    command={command}
                    response={response}
                    animate={index === 0}
                    animationDone={animationDone}
                />
            ))}
        </div>
    )
}