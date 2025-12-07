/*
use the nav tag, and embed the links for the pages i want to be accessible in the navBar 
write a css file and put the className in the opening tag for each page in the navBar
*/
import Link from "next/link"
export default function NavBar() {
    return (
        <nav>
            <Link href="/">home</Link>
            <Link href="/experience">experience</Link>
            <Link href="/projects">projects</Link>
            <Link href="/blog">blog</Link>
        </nav>
    )
}