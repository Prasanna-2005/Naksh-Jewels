import { Footer } from "@/components";
import Navbar from "@/components/navbar";
import DNACarousel from "@/components/DNA";
import TwoImageCarouselFull from "@/components/TwoImageCarouselFull";
import { TestimonialCarousel } from "@/components/tmonial";
import ProductGallery from "@/components/gallery";

import Hero from "./hero";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import Faq from "./faq";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <TwoImageCarouselFull/>
      <DNACarousel/>
       <ProductGallery/>
      <AboutEvent />
      <OurStats />
      <Faq />
      <TestimonialCarousel />
      <Footer />
    </>
  );
} 