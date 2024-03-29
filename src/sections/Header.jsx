import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Header = ({ scrollToSection, allrefs }) => {
  const [introRef, aboutRef, servicesRef, portfolioRef, contactRef] = allrefs;

  const [activeSection, setActiveSection] = useState(null);

  const calculateThreshold = (sectionHeight) => {
    const viewportHeight = window.innerHeight;
    const threshold =
      viewportHeight <= sectionHeight ? 0.5 : viewportHeight / sectionHeight;
    // console.log(threshold)
    return threshold;
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-300px",
      threshold: 0, // Initially set threshold to 0
    };

    const observerCallback = (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    allrefs.forEach((ref) => {
      if (ref.current) {
        const observerThreshold = calculateThreshold(ref.current.clientHeight);
        observer.observe(ref.current, {threshold: observerThreshold });
      }
    });

    return () => observer.disconnect();
  }, [allrefs]);

  return (
    <header className="relative h-16 ">
      <nav className="flex justify-between items-center h-full px-20">
        <div className="text-3xl font-bold">BHARGAV</div>
        <div>
          <ul className="flex gap-6 text-xl font-semibold">
            <li
              onClick={() => scrollToSection(introRef)}
              className={`relative cursor-pointer ${
                activeSection === "intro" ? "text-green-400" : ""
              }`}
            >
              Home
              <span
                className={`absolute inset-x-0 bottom-0 h-1 w-full bg-green-400 transition-width ease-in-out duration-500`}
                style={{ width: activeSection === "intro" ? "100%" : "0" }}
              />
            </li>
            <li
              onClick={() => scrollToSection(aboutRef)}
              className={`relative cursor-pointer ${
                activeSection === "about" ? "text-green-400" : ""
              }`}
            >
              About
              <span
                className={`absolute inset-x-0 bottom-0 h-1 w-full bg-green-400 transition-width ease-in-out duration-500`}
                style={{ width: activeSection === "about" ? "100%" : "0" }}
              />
            </li>
            <li
              onClick={() => scrollToSection(servicesRef)}
              className={`relative cursor-pointer ${
                activeSection === "services" ? "text-green-400" : ""
              }`}
            >
              Services
              <span
                className={`absolute inset-x-0 bottom-0 h-1 w-full bg-green-400 transition-width ease-in-out duration-500`}
                style={{ width: activeSection === "services" ? "100%" : "0" }}
              />
            </li>
            <li
              onClick={() => scrollToSection(portfolioRef)}
              className={`relative cursor-pointer ${
                activeSection === "portfolio" ? "text-green-400" : ""
              }`}
            >
              Portfolio
              <span
                className={`absolute inset-x-0 bottom-0 h-1 w-full bg-green-400 transition-width ease-in-out duration-500`}
                style={{ width: activeSection === "portfolio" ? "100%" : "0" }}
              />
            </li>
            <li
              onClick={() => scrollToSection(contactRef)}
              className={`relative cursor-pointer ${
                activeSection === "contact" ? "text-green-400" : ""
              }`}
            >
              Contact
              <span
                className={`absolute inset-x-0 bottom-0 h-1 w-full bg-green-400 transition-width ease-in-out duration-500`}
                style={{ width: activeSection === "contact" ? "100%" : "0" }}
              />
            </li>
          </ul>
        </div>
      </nav>
      {activeSection && activeSection !== "intro" ? (
        <aside className="absolute right-0 top-[650px] z-40 hover:scale-105" onClick={() => scrollToSection(introRef)}>
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            size="2xl"
            title="Move to Top"
          />
        </aside>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
