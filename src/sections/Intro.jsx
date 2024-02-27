import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { mern_stack } from "../images/index";

const Intro = ({ introRef, screenWidth }) => {
  return (
    <main
      className={`min-h-custom sm:flex items-center justify-around rounded-3xl ${screenWidth === "large" ? 'animate-color' : 'animate-none'}`}
      ref={introRef}
      id="intro"
    >
      <section className="pt-32">
        <h1 className="font-bold sm:text-headinglg text-headingsm pb-6">
          MERN Stack Junior Web Developer
        </h1>
        <p className="font-bold sm:text-4xl text-2xl pb-2">
          Hi, I'm{" "}
          <span className="font-bold sm:text-6xl text-4xl">
            Bhargav Jeereddy
          </span>
        </p>
        <p className="font-bold sm:text-4xl text-2xl sm:pb-6 pb-20">
          From Hyderabad, India
        </p>
        <div className="pb-6 sm:text-xl">
          <a
            href="mailto: jeereddybhargav.iith@gmail.com"
            className="flex gap-4"
          >
            <span className="hover:text-green-500 hover:-translate-y-0.5">
              <FontAwesomeIcon icon={faSquareEnvelope} size="xl" />
            </span>
            jeereddybhargav.iith@gmail.com
          </a>
        </div>
        <div className="pb-6 sm:text-xl flex gap-3">
          <span className="hover:text-green-500 hover:-translate-y-0.5">
            <FontAwesomeIcon icon={faPhone} size="xl" />
          </span>
          +91-8919471367
        </div>
        <div className="pb-6 sm:text-xl flex gap-6">
          <a
            className="hover:-translate-y-0.5"
            href="https://www.linkedin.com/in/jeereddy-bhargav-1b08588b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-green-500">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </span>
          </a>
          <a
            className="hover:-translate-y-0.5"
            href="https://twitter.com/Bhargav_theBoss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-green-500">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </span>
          </a>
          <a
            className="hover:-translate-y-0.5"
            href="https://github.com/Bhargav-j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-green-500">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </span>
          </a>
        </div>
        <a href="/portfolio/static/media/Jeereddy_Bhargav_Resume.pdf" download>
          <button className="py-4 px-6 text-xl font-semibold border bg-slate-400 rounded-md hover:-translate-y-0.5 hover:bg-green-500">
            Download CV
          </button>
        </a>
      </section>
      <section className="hidden lg:block relative pt-32">
        <div className="absolute inset-0 animate-border-color rounded-full"></div>
        <img
          src={mern_stack}
          alt="MERN_Stack_Image"
          className="rounded-full border-8 border-slate-300 animate-spin-slow"
        />
      </section>
    </main>
  );
};

export default Intro;
