import React from 'react'
import { FaFacebook, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa6";


const LandingFooter = () => {
    return (
        <div className="py-4">
            <div className="w-[90%] m-auto flex justify-evenly">
                <SocialItem title="Facebook" icon={<FaFacebook style={{ fill: "var(--secondary-color)" }} className="w-10 h-10" />} />
                <SocialItem title="Twitter" icon={<FaTwitter style={{ fill: "var(--secondary-color)" }} className="w-10 h-10" />} />
                <SocialItem title="Twitch" icon={<FaTwitch style={{ fill: "var(--secondary-color)" }} className="w-10 h-10" />} />
                <SocialItem title="Discord" icon={<FaDiscord style={{ fill: "var(--secondary-color)" }} className="w-10 h-10" />} />
            </div>
        </div>
    )
}

const SocialItem = ({ title, icon }) => {
    return (
        <div className="flex gap-2 justify-center w-max items-center">
            {icon}
            <div className="flex flex-col  h-max justify-end">
                <p style={{ lineHeight: ".75rem" }} className="uppercase text-xs">{title}</p>
                <h3 style={{ lineHeight: "1.1rem" }} className="font-bold h-min text-2xl uppercase tracking-custom">Divison 1 Gaming</h3>

            </div>
        </div>
    )
}

export default LandingFooter
