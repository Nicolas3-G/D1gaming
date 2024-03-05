import Link from "next/link"
import React from 'react'

const NavButton = ({ text, link }) => {
    return (
        // <Link className="hover:bg-gray-800 z-20 " href={link}>
        //     <div className="font-bold hover:bg-white hover:bg-opacity-10 rounded-full z-10 text-secondary w-[200px] h-[54px] flex items-center justify-center uppercase">

        //         {text}
        //     </div>
        // </Link>
        <Link className="hover:bg-gray-800 z-20 " href={link}>
            <div className="font-bold relative hover:bg-white z-10 skew-x-[45deg] text-secondary-text w-[200px] h-[45px] flex items-center justify-center uppercase bg-secondary">

                <p className="absolute -skew-x-[45deg]">{text}</p>
            </div>
        </Link>
    )
}

export default NavButton;
