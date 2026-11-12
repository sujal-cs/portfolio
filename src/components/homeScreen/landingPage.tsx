import { Screen } from "@/layout/Screen";
import { Navbar } from "@/components/pageComponents/Navbar";
import { Hero } from "@/components/pageComponents/Hero";
import { About } from "@/components/pageComponents/About";
import { Achievements } from "@/components/pageComponents/Achievements";
import { Skills } from "@/components/pageComponents/Skills";
import { Works } from "@/components/pageComponents/Works";
import { Education } from "../pageComponents/Education";

export const LandingPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-4">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Achievements />
          <Education />
          <Works />
          {/* TODO:
          projects section */}
        </div>
      </Screen>
    </>
  );
};
