import Image from "next/image";
import LandingHero from "./components/landing-page/LandingHero";
import BackgroundHighlight from "./components/shared/BackgroundHighlight";
import LandingFooter from "./components/landing-page/LandingFooter";
import LandingHeader from "./components/landing-page/LandingHeader";

export default function Home() {
  return (
    <main className="bg-main-bg h-screen relative">

      <BackgroundHighlight shadowBlur="400px" shadowSpread="500px" centerHoriz={true} highlightColor="#aac1ff" setZ={1} innerSize="300px" topPos="-50%" rightPos="50%" />
      <div className="bg-[#c1d0fa]" />
      <div className="z-10 flex flex-col h-full">
        <LandingHeader />
        <LandingHero />
        {/* <LandingFooter /> */}
      </div>

    </main>
  );
}
