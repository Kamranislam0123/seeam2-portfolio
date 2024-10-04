import Hero from "@/(components)/hero";
import Subbaner from "@/(components)/subbaner";
import Services from "@/(components)/services";
import Projects from "@/(components)/projects";
import Experience from "@/(components)/experince";
import Prosection from "@/(components)/prosection";
import Prodetails from "@/(components)/prodetails";
import Reviews from "@/(components)/reviews";
import Slider from "@/(components)/slider";
import Meeting from "@/(components)/meeting";
export default function Home() {
  return (
    <div>
      <Hero />
      <Subbaner />
      <Services />
      <Projects />
      <Experience />
      <Prosection />
      <Prodetails />
      <Reviews />
      <Slider />
      <Meeting />
    </div>
  );
}
