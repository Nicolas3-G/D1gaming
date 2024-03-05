import React from 'react'
import BackgroundHighlight from "../shared/BackgroundHighlight"
import NavButton from "../shared/NavButton"
import Image from "next/image"

const LandingHero = () => {
  return (
    <section className="w-custom-sm m-auto flex gap-16 flex-col items-center">
      <div className="flex flex-col items-center gap-10">
        <Image src="/icons/main.png" width={200} height={200} />
        <div className="text-center">

          <h2 className="text-custom-lg text-secondary font-medium uppercase tracking-custom">Esports and Streaming</h2>
          <h1 className="text-8xl font-bold uppercase tracking-custom">Division 1 Gaming</h1>
        </div>
      </div>
      {/* Button Row */}
      <div className="flex gap-20 justify-between">
        <NavButton text="Start Browsing!" link="/community" />
        <NavButton text="Join Community!" link="#" />
      </div>

    </section>
  )
}

export default LandingHero
