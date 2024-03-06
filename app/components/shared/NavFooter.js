import Image from "next/image"
import Link from "next/link"
import React from 'react'

const NavFooter = () => {
    return (
        <div className="h-[10vh] bg-bg-dark fixed px-10 bottom-0 w-full flex items-center justify-between">
            <div className="flex gap-4 h-full">
                <div className="relative w-[150px] h-full ">
                    <Link href="/">
                        <Image src="/icons/main-crop.png" className="absolute bottom-4" width={120} height={120} />
                    </Link>
                </div>
                <div className="flex gap-6 ">
                    <nav className="flex gap-2">
                        <NavItem text="Home" link="/" />
                        <NavItem text="Community" link="/" />
                        <NavItem text="Gamification" link="/" />
                        <NavItem text="News" link="/" />
                        <NavItem text="Events" link="/" />

                    </nav>
                </div>
            </div>
            <div className="font-bold px-4 flex gap-10">
                <Link href="/main/register">Login</Link>
                <Link href="/main/register">Register</Link>
            </div>

        </div>
    )
}

const NavItem = ({ text, link }) => {
    return (
        <div className="font-bold px-4 uppercase flex items-center">
            {text}
        </div>
    )
}

export default NavFooter
