import {
  faUpRightFromSquare,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProjectCard = ({ projectDetails }) => {
  return (
    <section className="text-justify shrink-0 border-2 rounded-2xl overflow-hidden sm:w-96 w-80 shadow-lg transition ease-in-out hover:-translate-y-1 duration-150 leading-tight bg-slate-200">
      <div className="relative">
        <img
          src={projectDetails.img}
          alt={projectDetails.title}
          className="object-fill h-56 pb-6 w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 gap-6">
          <a
            className="w-14 h-14 bg-green-400 flex items-center justify-center rounded-full"
            href={projectDetails.webLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="transition ease-in-out hover:scale-125 duration-200">
              <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
            </span>
          </a>
          <a
            className="w-14 h-14 bg-green-400 flex items-center justify-center rounded-full"
            href={projectDetails.gitSource}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="transition ease-in-out hover:scale-125 duration-200">
              <FontAwesomeIcon icon={faPaperclip} size="xl" />
            </span>
          </a>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-center font-bold sm:text-2xl text-subheadingsm pb-2">
          {projectDetails.title}
        </h1>
        <h3 className="text-center text-base font-semibold pb-2 leading-tight">
          {projectDetails.features}
        </h3>
        <p className="text-justify">{projectDetails.info}</p>
      </div>
    </section>
  );
};
