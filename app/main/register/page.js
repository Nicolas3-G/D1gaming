import RegistrationForm from "@/app/components/registration/RegistrationForm"
import React from 'react'

const RegistrationPage = () => {
    return (
        <div className="text-black flex-1 flex h-full">
            {/* Left Half */}
            <div className="flex-1">
                <RegistrationForm />
            </div>
            {/* Right Half */}
            <div className="flex-1 bg-secondary flex items-center justify-center">
                <span>IMAGE HERE</span>
            </div>
        </div>
    )
}

export default RegistrationPage
