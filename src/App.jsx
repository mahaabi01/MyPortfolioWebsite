import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Journey from "./components/Journey";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray(".reveal-up").forEach((element) => {
      gsap.fromTo(element, { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });
  });

  return (
    <ReactLenis root options={{ lerp: 0.08 }}>
      <Header />
      <main><Hero /><About /><Skill /><Journey /><Work /><Contact /></main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
