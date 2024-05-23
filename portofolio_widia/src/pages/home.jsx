import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Parallax from "../components/parallax";
import AboutMe from "../components/aboutme";
import Portofolio from "../components/portofolio";
import Contact from "../components/contact";

function Home() {
  return (
      
      <div >
        
        <div className="bg-bg-color text-gray-50 font-sans">

            <section><Navbar/></section>
            <section id="Homepage">
            
              <Hero/>
            </section>
            <section > 
              <Parallax type={"about"}/>
            </section>
            <section id="About">
              <AboutMe/>
            </section>
            <section  >
              <Parallax type={"portofolio"}/>
            </section>
            <section id="Portofolio">
              <Portofolio/>
            </section>
            <section id="Contact">
              <Contact/>
            </section>
        </div>
        
      </div>
    
  );
}

export default Home;
