import React from 'react'
import { FaFacebook, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa6";


const LandingHeader = () => {
    return (
        <div className="fixed py-4">
            <div className="mx-4 flex gap-4">
                <SocialItem icon={<FaFacebook style={{ fill: "var(--secondary-color)" }} className="w-4 h-4" />} />
                <SocialItem icon={<FaTwitter style={{ fill: "var(--secondary-color)" }} className="w-4 h-4" />} />
                <SocialItem icon={<FaTwitch style={{ fill: "var(--secondary-color)" }} className="w-4 h-4" />} />
                <SocialItem icon={<FaDiscord style={{ fill: "var(--secondary-color)" }} className="w-4 h-4" />} />
            </div>
        </div>
    )
}

const SocialItem = ({ icon }) => {
    return (
        <div className="flex gap-1 justify-center w-max items-center">
            {icon}
            <div className="flex flex-col  h-max justify-end">
                <h3 style={{ lineHeight: "1.1rem" }} className="font-semibold text-sm  h-min text-[#ffffff7d] uppercase tracking-custom">@Divison1Gaming</h3>

            </div>
        </div>
    )
}

export default LandingHeader
