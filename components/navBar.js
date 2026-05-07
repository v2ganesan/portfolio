'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/blog", label: "blog" },
]

export default function NavBar() {
    const pathname = usePathname()
    const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <nav className="flex items-center justify-between px-10 pt-6 pb-4 border-b border-gray-100 dark:border-[#222]">
            <Link href="/" className="text-[#865312] font-semibold text-sm tracking-wide">
                Varun Ganesan
            </Link>
            <div className="flex gap-1">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                            isActive(href)
                                ? "text-[#865312] bg-[#865312]/10"
                                : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
