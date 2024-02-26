import { faPhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = ({ contactRef }) => {
  return (
    <section className="min-h-custom text-center animate-moving-gradient rounded-2xl" ref={contactRef} id="contact">
      <section>
        <h1 className="font-bold sm:text-5xl text-2xl py-6">Get in touch</h1>
        <p className="text-xl font-semibold sm:pb-20 pb-10 pt-3">
          Would you love to learn more about my projects
        </p>
        <div className="sm:flex justify-evenly text-xl">
          <div className="flex sm:block justify-start items-center gap-5 sm:ml-0 ml-20">
            <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faPhone} size="2xl" />
            </div>
            <p className="text-orange-400">+91 8919471367</p>
          </div>
          <div className="flex sm:block justify-start items-center gap-5 sm:ml-0 ml-20">
            <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <a
                className="hover:scale-110"
                href="mailto:jeereddybhargav.iit@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
                </span>
              </a>
            </div>
            <p className="text-orange-400">Gmail</p>
          </div>
          <div className="flex sm:block justify-start items-center gap-5 sm:ml-0 ml-20">
            <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <a
                className="hover:scale-110"
                href="https://github.com/Bhargav-j"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </span>
              </a>
            </div>
            <p className="text-orange-400">GitHub</p>
          </div>
          <div className="flex sm:block justify-start items-center gap-5 sm:ml-0 ml-20">
            <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <a
                className="hover:scale-110"
                href="https://www.linkedin.com/in/jeereddy-bhargav-1b08588b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </span>
              </a>
            </div>
            <p className="text-orange-400">LinkedIn</p>
          </div>
          <div className="flex sm:block justify-start items-center gap-5 sm:ml-0 ml-20">
            <div className="sm:w-28 sm:h-28 w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <a
                className="hover:scale-110"
                href="https://twitter.com/Bhargav_theBoss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </span>
              </a>
            </div>
            <p className="text-orange-400">Twitter</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
