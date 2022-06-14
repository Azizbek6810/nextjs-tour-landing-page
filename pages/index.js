import React from 'react';
import Section1 from "../components/Section-1";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import SlideSection from "../components/SlideSection";


export default function Home() {
    return (
        <div>
           <SlideSection />
            <Section1 />
            <AboutSection />
            <GallerySection />
            <NewsSection />
            <ContactSection />
        </div>
  )
}
