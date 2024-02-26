import React from "react";
import * as images from "../images/index";

const TechnologiesDatabase = {
  Languages: {
    "HTML 5": `${images.HTML_logo}`,
    "CSS 3": `${images.CSS3_logo}`,
    " JavaScript (ES6)": `${images.JavaScript_logo}`,
    TypeScript: `${images.Typescript_logo_2020}`,
  },
  "Frameworks/Libraries": {
    React: `${images.react_logo}`,
    "Node.js": `${images.nodejs_icon}`,
    Express: `${images.express_js_logo}`,
    Redux: `${images.redux_logo}`,
    "Tailwind CSS": `${images.Tailwind_CSS}`,
    "Bootstrap 5": `${images.Bootstrap_logo}`,
    SASS: `${images.Sass_Logo_Color}`,
    mongoose: `${images.mongoosejs}`,
  },
  "Data / Tools": {
    MongoDB: `${images.mongodb_icon}`,
    MySQL: `${images.mysql_logo}`,
    Firebase: `${images.firestore_logo}`,
  },
  "API Proficiency": {
    "RESTful API": `${images.Restful_API_logo}`,
    "GraphQL (Apollo Client/React) (Basics)": `${images.graphQL_Apolloclinet_logo}`,
  },
  "Testing & Quality Assurance (Basics)": {
    "React Testing Library (RTL)": `${images.react_testing_library_logo}`,
    Jest: `${images.jest_logo_png_transparent}`,
  },
  "Version Control": {
    Git: `${images.Git_logo}`,
    GitHub: `${images.guithub_logo}`,
  },
  "GUI Development": {
    Python: `${images.python_logo}`,
    Tkinter: `${images.tkinter_logo}`,
  },
  "Data Analysis": {
    MySQL: `${images.mysql_logo}`,
    Python: `${images.python_logo}`,
    Pandas: `${images.Pandas_logo}`,
  },
};

const Services = ({servicesRef}) => {
  return (
    <section className="min-h-custom" ref={servicesRef} id="services">
      <h1 className="font-bold sm:text-5xl text-headingsm pb-6 sm:pt-0 pt-10">My Services</h1>
      <div className="sm:flex gap-4">
        <section className="flex-initial text-subheadingsm sm:w-2/3 pl-4 border-2 rounded-xl mb-10 sm:mb-0 bg-slate-200">
          <h1 className="sm:text-2xl font-bold pb-6 pt-6">MERN Stack Web Development</h1>
          {Object.keys(TechnologiesDatabase)
            .slice(0, 5)
            .map((eachObject, id) => {
              const subObject = TechnologiesDatabase[eachObject];
              return (
                <div key={id}>
                  <h1 className="text-xl font-semibold pb-6 underline">{eachObject}</h1>
                  <div className="flex flex-wrap pb-6">
                    {Object.keys(subObject).map((each) => {
                      const content = subObject[each];
                      return (
                        <div key={each} className="flex items-center pr-5 sm:text-lg text-textsm">
                          <img
                            className="object-contain sm:w-10 sm:h-10 w-8 h-8 pr-1"
                            src={content}
                            alt={each}
                          />
                          {each}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </section>
        <section className="flex-initial sm:w-1/3 border-2 p-6 rounded-lg bg-slate-200">
          {Object.keys(TechnologiesDatabase)
            .slice(5,)
            .map((eachObject) => {
              const subObject = TechnologiesDatabase[eachObject];
              return (
                <div key={eachObject}>
                  <h1 className="sm:text-2xl text-subheadingsm font-bold pb-6">{eachObject}</h1>
                  <div className="flex sm:block gap-5 flex-wrap">
                    {Object.keys(subObject).map((each) => {
                      const content = subObject[each];
                      return (
                        <div key={each} className="flex sm:pb-6 pb-2 sm:text-xl text-textsm items-center">
                          <img
                            className="object-contain sm:w-10 sm:h-10 w-8 h-8 pr-1"
                            src={content}
                            alt={each}
                          />
                          {each}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </section>
  );
};

export default Services;
