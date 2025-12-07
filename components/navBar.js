/*
use the nav tag, and embed the links for the pages i want to be accessible in the navBar 
write a css file and put the className in the opening tag for each page in the navBar
*/
//import Link from "next/link"
export default function NavBar( {className} ) {
    return (
        <nav className={className}>
            <a href="/">home</a>
            <a href="/experience">experience</a>
            <a href="/projects">projects</a>
            <a href="/blog">blog</a>
        </nav>
    )
}