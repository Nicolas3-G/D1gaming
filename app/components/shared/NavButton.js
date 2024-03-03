import Link from "next/link"
import React from 'react'

const NavButton = ({ text, link }) => {
    return (
        <Link className="hover:bg-gray-800 z-20 " href={link}>
            <div className="font-bold hover:bg-white z-10 text-secondary-text w-[200px] h-[54px] flex items-center justify-center uppercase bg-secondary">

                {text}
            </div>
        </Link>
    )
}

export default NavButton;
