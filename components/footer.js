import Link from "next/link"
export default function Footer () {
    return(
        <div className="flex flex-col text-center mt-auto">
            <nav>
                <Link href="mailto:varun.mg554@gmail.com" className="text-gray-500 underline p-1.5 text-xs">email</Link>
                <Link href="https://github.com/v2ganesan" className="text-gray-500 underline p-1.5 text-xs">github</Link>
                <Link href="https://www.linkedin.com/in/v2ganesan/" className="text-gray-500 underline p-1.5 text-xs">linkedin</Link>
                <Link href="https://open.spotify.com/user/varun.mg554?si=9aa0b89e477b4367" className="text-gray-500 underline p-1.5 text-xs">spotify</Link>
            </nav>
            <p className="text-center text-[10px]"> © 2025 Varun Ganesan. All Rights Reserved.</p>
        </div>
    )
}