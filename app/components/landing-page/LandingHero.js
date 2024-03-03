import React from 'react'
import BackgroundHighlight from "../shared/BackgroundHighlight"
import NavButton from "../shared/NavButton"
import Image from "next/image"

const LandingHero = () => {
  return (
    <section className="w-custom-sm m-auto flex gap-10 flex-col items-center pt-[0%]">
      <div className="flex flex-col items-center">
      <Image src="/icons/main.png" width={200} height={200} />
        <h2 className="text-custom-lg text-secondary font-medium uppercase tracking-custom">Esports and Streaming</h2>
        <h1 className="text-8xl font-bold uppercase tracking-custom">Division 1 Gaming</h1>
      </div>
      {/* Button Row */}
      <div className="flex gap-20 justify-between">
        <NavButton text="Start Browsing!" link="#" />
        <NavButton text="Join Community!" link="#" />
      </div>

    </section>
  )
}

export default LandingHero
