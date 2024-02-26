import { faBars, faChevronUp, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const HeaderSM = ({ scrollToSection, allrefs }) => {
  const [showMenu, setShowMenu] = useState(false);

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
      rootMargin: "0px",
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
        observer.observe(ref.current, { threshold: observerThreshold });
      }
    });

    return () => observer.disconnect();
  }, [allrefs]);

  return (
    <header className="relative pt-5 ">
      <nav>
        <section className="flex justify-between items-center pr-5">
          <div className="text-3xl font-bold">BHARGAV</div>
          {!showMenu ? (
            <div onClick={() => setShowMenu(!showMenu)} className="h-full duration-150 ease-in-out transition-height">
              <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
          ) : (
            ""
          )}
        </section>
        {showMenu ? (
          <div className="flex items-end h-full flex-col justify-center pr-5">
            <ul className="flex text-xl font-semibold flex-col gap-4">
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
                  style={{
                    width: activeSection === "portfolio" ? "100%" : "0",
                  }}
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
            <div onClick={() => setShowMenu(!showMenu)} className="pr-5 pt-2">
              <FontAwesomeIcon icon={faChevronUp} size="xl" />
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
      {activeSection && activeSection !== "intro" ? (
        <aside
          className="absolute right-0 top-[650px] z-40 hover:scale-105"
          onClick={() => scrollToSection(introRef)}
        >
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

export default HeaderSM;
