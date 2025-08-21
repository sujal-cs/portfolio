import { Screen } from "@/layout/Screen";
import { Navbar } from "@/components/pageComponents/Navbar";
import { Hero } from "@/components/pageComponents/Hero";
import { About } from "@/components/pageComponents/About";
import { Achivements } from "@/components/pageComponents/Achivements";
import { Skills } from "@/components/pageComponents/Skills";
import { Works } from "@/components/pageComponents/Works";

export const LandingPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-4">
          <Navbar />
          <Hero />
          <About />
          <Achivements />
          <Skills />
          <Works />
          {/* TODO:
          projects section */}
        </div>
        {/* <p>Note: Portfolio is heavly inspired by https://rinkit.tech/ do check out</p> */}
      </Screen>
    </>
  );
}