import React from "react";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "../styles/styles.css"

const Home = ({allrefs}) => {

  const [introRef, aboutRef, servicesRef, portfolioRef, contactRef, screenWidth] = allrefs

  return (
    <div className= "max-h-custom overflow-auto">
      <Intro introRef={introRef} screenWidth={screenWidth}/>
      <About aboutRef = {aboutRef}/>
      <Services servicesRef={servicesRef}/>
      <Portfolio portfolioRef={portfolioRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
};

export default Home;
