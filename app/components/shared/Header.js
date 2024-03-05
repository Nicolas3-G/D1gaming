import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Header = () => {
    return (
        <div className="h-[22vh] bg-bg-dark flex items-center justify-between">
            <div className="flex gap-6">
                <Image src="/icons/main.png" width={150} height={150} />
                <nav className="flex gap-2">
                    <NavItem text="Home" link="/" />
                    <NavItem text="Community" link="/" />
                    <NavItem text="Gamification" link="/" />
                    <NavItem text="News" link="/" />
                    <NavItem text="Events" link="/" />
   
                </nav>
            </div>
            <div className="font-bold px-4 flex gap-10">
                <span>Login</span>
                <Link href="/community/register">Register</Link>
            </div>

        </div>
    )
}

const NavItem = ({text, link}) => {
    return (
        <div className="font-bold px-4 uppercase flex items-center">
            {text}
        </div>
    )
}

export default Header
