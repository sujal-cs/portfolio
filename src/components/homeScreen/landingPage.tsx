import { Screen } from "@/layout/Screen";
import { Navbar } from "../pageComponents/Navbar";
import { Hero } from "../pageComponents/Hero";

export const LandingPage = () => {
  return (
    <>
      <Screen>
        <div className="flex flex-col gap-4">
          <Navbar />
          <Hero />
        </div>
      </Screen>
    </>
  );
}