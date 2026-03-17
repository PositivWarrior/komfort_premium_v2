"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Offer from "../components/Offer";
import Fleet from "../components/Fleet";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

import FAQ from "../components/FAQ";
import PremiumTransport from "../components/PremiumTransport";

export default function Home() {
  return (
    <LanguageProvider>
      <div id="page" className="hfeed site">
        <Header />
        <Hero />
        <About />
        <Offer />
        <PremiumTransport />
        <FAQ />
        <Fleet />
        <Contact />
        <Reviews />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
