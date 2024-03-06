"use client"
import React, { useState } from 'react'
import Button from "../shared/Button"

const RegistrationForm = () => {
    const [selectedForm, setSelectedForm] = useState("register")

    return (
        <div className="p-4 flex flex-col h-full">
            <FormHeader selectedForm={selectedForm} setSelectedForm={setSelectedForm} altOption={selectedForm == "login" ? "register" : "login"} />
            {selectedForm == "login" ? <LoginForm /> : <RegisterForm />}

        </div>
    )
}

const RegisterForm = () => {
    return (
        <form className="py-10 flex flex-col">
            <FormTextInputGroup label="Username" type="text" placeholder="John" />
            <FormTextInputGroup label="Email" type="text" placeholder="John" />
            <FormTextInputGroup label="Password" type="text" placeholder="John" />
            <FormTextInputGroup label="Confirm Password" type="text" placeholder="John" />
            <div className="self-center py-10">
                <Button text="Register" />
            </div>
        </form>
    )

}

const LoginForm = () => {
    return (
        <form className="py-10 flex w-full flex-col h-full justify-center items-center">
            <FormTextInputGroup itemsCenter label="Username" type="text" placeholder="John" />
            <FormTextInputGroup itemsCenter label="Email" type="text" placeholder="John" />
            <div className="py-10">
                <Button text="Login" />
            </div>
        </form>
    )

}

const FormTextInputGroup = ({ label, type, placeholder, itemsCenter = false }) => {
    return (
        <div className={`${itemsCenter ? "items-center flex flex-col": ""} mb-4 w-full`}>
            <label htmlFor={label} className="block text-lg font-semibold mb-2">{label}</label>
            <input type={type} placeholder={placeholder} className="w-1/2 bg-gray-100 p-2" />
        </div>
    )
}


const FormHeader = ({ selectedForm, setSelectedForm, altOption }) => {
    return (
        <div className="flex justify-between">
            <h1 className="text-4xl font-semibold uppercase border-l-4 px-2 border-black">{selectedForm}</h1>
            <button onClick={() => setSelectedForm(altOption)} className="text-lg opacity-60 font-semibold uppercase hover:opacity-100">
                {altOption}
            </button>
        </div>
    )
}

export default RegistrationForm