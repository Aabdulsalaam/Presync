import AboutHero from "./hero/page";
import MissionSection from "./mission/page";
import CoreValuesSection from "./corevalues/page";
import TestimonialsSection from "./testimonials/page";
import Footer from "../../shared/footer/footer";


export default function About() {
  return (
    <>
     <AboutHero />
     <MissionSection />
     <CoreValuesSection />
     <TestimonialsSection />
      <Footer />
      </> 
  );
}