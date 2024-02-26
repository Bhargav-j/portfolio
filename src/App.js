import { useEffect, useRef, useState } from "react";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Home from "./sections/Home";
import HeaderSM from "./sections/HeaderSmall";

function App() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 767) {
      setScreenWidth("large");
    } else {
      setScreenWidth("small");
    }
  }, [windowWidth]);

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App h-screen sm:mx-24 mx-5 md:mx-10 font-poppins text-base">
      {screenWidth && screenWidth === "large" ? (
        <Header
          scrollToSection={scrollToSection}
          allrefs={[introRef, aboutRef, servicesRef, portfolioRef, contactRef]}
        />
      ) : (
        <HeaderSM
          scrollToSection={scrollToSection}
          allrefs={[introRef, aboutRef, servicesRef, portfolioRef, contactRef]}
        />
      )}
      <Home
        allrefs={[introRef, aboutRef, servicesRef, portfolioRef, contactRef, screenWidth]}
      />
      <Footer />
    </div>
  );
}

export default App;
