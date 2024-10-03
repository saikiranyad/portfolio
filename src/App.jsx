import './App.css'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Work from './components/Work'

function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    console.log(elements);
    elements.forEach((element) => {
      gsap.to(element, {
        ScrollTrigger: {
          trigger: element,
          start:'-200 boottom',
          end:'bottom 80%',
          scrub: true
        }, y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })

  })

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />

    </ReactLenis>
  )
}

export default App
