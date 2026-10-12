import Hero from "./hero/page"
import Partners from "./partners/page"
import WhatWeDo from "./whatwedo/page";
import Pricing from "./pricing/page";
import Footer from "../../shared/footer/footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <WhatWeDo />
      <Pricing />
      <Footer />
      </> 
  );
}