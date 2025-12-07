/*
use the nav tag, and embed the links for the pages i want to be accessible in the navBar 
write a css file and put the className in the opening tag for each page in the navBar
*/
import Link from "next/link"
export default function NavBar() {
    return (
        <nav className="flex justify-center mt-8">
            <Link href="/" className="text-gray-500 underline p-1.5">home</Link>
            <Link href="/experience" className="text-gray-500 underline p-1.5">experience</Link>
            <Link href="/projects" className="text-gray-500 underline p-1.5">projects</Link>
            <Link href="/blog" className="text-gray-500 underline p-1.5">blog</Link>
        </nav>
    )
}