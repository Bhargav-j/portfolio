import React, { useState } from "react";
import aboutImg from "../images/about-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faBook } from "@fortawesome/free-solid-svg-icons";

// const About_subtitles = ["Achievements", "Experience & Education"];
const subHeading_dataset = {
  Achievements: {
    Productivity:
      "Boosted productivity by 20% through automating daily creation of comprehensive Excel summaries for surveyed data which include various parameters. - TSWB project ",
    Optimization:
      "Streamlined data collection and manipulation by seamlessly integrating Python with MySQL API, including creating a robust RDBMS. - TSWB project",
    Development:
      "Developed a robust GUI with image compression and file manipulation capabilities, resulting in a 50% reduction in data verification and uploading load. - TSWB project",
  },
  "Experience & Education": {
    "June 2022 - Feb 2023":
      "GIS/GPS Manager - Project: TSWB Mapping of Waqf Properties of Telangana (IITH)",
    "June 2022": "MTech from IIT Hyderabad",
    "June 2018 - July 2020":
      "Assitant professor in Civil Engineering - Vasvai / AVN college of Engineering ",
    "May 2018": "MTech from NIT Surathkal",
    // "June 2015": "BTech from KLUniveristy, Vijayawada ",
  },
};

const About = ({aboutRef}) => {
  const subHeadings = Object.keys(subHeading_dataset);

  const [selectedTitle, setselectedTitle] = useState(subHeadings[0]);

  // console.log(Object.keys(subHeading_dataset))

  return (
    <section className="sm:flex min-h-custom gap-5" ref={aboutRef} id="about">
      <div className="flex-initial sm:w-1/3 w-full sm:max-h-[35rem] max-h-[20rem] py-6 overflow-hidden rounded-lg">
        <img
          className="w-full sm:h-full sm:object-cover object-cover rounded-lg h-[20rem]"
          src={aboutImg}
          alt="ProfileImage"
        />
      </div>
      <div className="flex-initial sm:w-2/3 sm:pt-0 pt-10">
        <h1 className="font-bold sm:text-5xl text-headingsm pb-6">About Me</h1>
        <p className="text-justify sm:text-lg pb-6">
          As a MERN stack Developer, I excel in both front-end and back-end
          development, proficiently navigating the entire development lifecycle.
          With a strong command over programming languages and methodologies, I
          specialize in crafting and implementing functional specifications,
          ensuring seamless user experiences and robust application performance.{" "}
        </p>

        <ul className="flex gap-10 sm:text-xl font-semibold pb-6">
          {subHeadings.map((title) => {
            return (
              <li
                className= {`cursor-pointer ${selectedTitle === title && 'text-green-500'} transition hover:scale-110 duration-150`}
                key={title}
                onClick={() => setselectedTitle(title)}
              >
                {title === "Achievements" ? (
                  <span className="pr-2">
                    <FontAwesomeIcon icon={faMedal} size="lg" />
                  </span>
                ) : (
                  <span className="pr-2">
                    <FontAwesomeIcon icon={faBook} size="lg" />
                  </span>
                )}
                {title}
              </li>
            );
          })}
        </ul>

        <section>
          {Object.keys(subHeading_dataset[selectedTitle]).map((subTitle) => {
            const subDataset = subHeading_dataset[selectedTitle];
            const subContent = subDataset[subTitle];
            return (
              <div key={subTitle} className="pb-4 md:text-lg">
                <h1 className="font-semibold underline">{subTitle}</h1>
                <p>{subContent}</p>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default About;
