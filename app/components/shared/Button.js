import React from 'react'

const Button = ({ text }) => {
  return (
    <button>
      <div className="font-bold relative hover:bg-white z-10 skew-x-[45deg] text-secondary-text w-[200px] h-[45px] flex items-center justify-center uppercase bg-secondary">
        <p className="absolute -skew-x-[45deg]">{text}</p>
      </div>
    </button>
  )
}

export default Button
