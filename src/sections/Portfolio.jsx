import React from "react";
import * as images from "../images/index";
import { ProjectCard } from "../components/ProjectCard";

const projectsDatabase = [
  // Full Stack Dataset
  {
    category: "Full Stack Projects",
    description:
      "I've honed my skills in both front-end and back-end development through these MERN stack projects. My journey has led me to master MongoDB for efficient data storage, Express.js for building robust server-side applications, React.js for crafting immersive user interfaces, and Node.js for scalable server-side logic. Each project I've undertaken has provided valuable insights into programming design, development best practices, and the seamless implementation of functional specifications ",
    projects: [
      {
        title: "Multi-User Cursors Display using web sockets",
        img: `${images.free_online_courses}`,
        webLink: "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/",
        gitSource: "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/",
        features: "React/Nodejs/socket.io",
        info: "Created a Multi-User Cursors Display web app with Node.js backend and React frontend. Leveraged real-time communication to synchronize cursors across multiple users, enhancing collaboration and interaction. Implemented in-depth knowledge of WebSocket technology to facilitate seamless, synchronized experiences in a dynamic web environment.",
      },
      {
        title: "Simple Book Store",
        img: `${images.Simple_Book_store}`,
        webLink: "https://bhargav-j.github.io/MERN_Simple_Bookstore/",
        gitSource: "https://github.com/Bhargav-j/MERN_Simple_Bookstore",
        features:
          "React/Nodejs/Express/Mongoose/MongoDB/TailwindCSS/Dynamic & Responsive",
        info: "Crafted a dynamic and responsive Book Store App utilizing React and TailwindCSS for the frontend and Node.js/Express with Mongoose/MongoDB for the backend. Leveraged full-stack capabilities to ensure seamless functionality, allowing users to browse, search, and interact with a diverse catalog of books in an intuitive and engaging manner.",
      },
      {
        title: "Authentication using JWT and HTTP-only cookies",
        img: `${images.Auth_using_JWT}`,
        webLink: "https://mern-authentication-using-jwt-secure.onrender.com/",
        gitSource: "https://github.com/Bhargav-j/MERN_Authentication_using_JWT",
        features: "React/Nodejs/Express/JWT/Mongoose/MongoDB/Axios",
        info: "Designed and implemented a secure Authentication web application using JWT (JSON Web Tokens) and HTTP-only cookies, powered by React for the frontend and Node.js/Express with Mongoose/MongoDB/axios for the backend. Employed industry-standard security practices to safeguard user data and ensure seamless authentication experiences across the application.",
      },
    ],
  },
  // React, Firebase Dataset
  {
    category: "React Projects",
    description:
      "Proficient in React development, I specialize in crafting seamless and responsive user interfaces by integrating catalog displays and detailed item functionalities using React. I leverage React Router for efficient navigation and Redux for state management, ensuring optimal data handling. With expertise in Firebase integration, I implement secure user authentication features and seamlessly integrate Firestore for efficient data retrieval and modification. Additionally, I excel in API integration, adeptly interfacing with RESTful APIs to expand application functionalities, fetching supplementary data and demonstrating robust data handling and error management skills.",
    projects: [
      {
        title: "Free Online Courses Web Application",
        img: `${images.free_online_courses}`,
        webLink: "https://bhargav-j.github.io/Free-online-courses/",
        gitSource: "https://github.com/Bhargav-j/Free-online-courses",
        features:
          "React/Protected Routes/redux-thunk/contextAPI/User Authentication/Rest API/Firebase/Dynamic & Responsive",
        info: "Developed a dynamic and responsive free online courses web app with React, featuring protected routes, user authentication, and state management through Redux-Thunk and Context API. Integrated Firebase for real-time data and user authentication, ensuring a seamless learning experience with dynamic content and secure access across multiple pages.",
      },
      {
        title: "Simple Book Store",
        img: `${images.eCommerceWebApp}`,
        webLink: "https://bhargav-j.github.io/eCommerce-web-application",
        gitSource: "https://github.com/Bhargav-j/eCommerce-web-application",
        features:
          "React/Protected Routes/contextAPI/User Authentication/Rest API/Dynamic & Responsive",
        info: "Designed and implemented an fully responsive and dynamic e-commerce platform leveraging React, React Router for protected Routes, and Bootstrap for responsive UI/UX. Integrated RESTful APIs, employed Context API for state management, and implemented protected routes for enhanced security.",
      },
      {
        title: "ProTaskify - Task Manager App",
        img: `${images.ProTaskify}`,
        webLink: "https://bhargav-j.github.io/task-manager/",
        gitSource: "https://github.com/Bhargav-j/task-manager",
        features:
          "React/contextAPI/Firebase Integration/User Authentication/Real-time Functionality/Fully Responsive",
        info: "ProTaskify is a user-specific, real-time task manager integrating Firebase services for secure authentication and Firestore for data storage. Leverages React Context API for seamless global state management. Offers dynamic task creation, edits, and real-time updates. A professional-grade solution for efficient task handling and organization.",
      },
      {
        title: "Government Project Survey App - Clone",
        img: `${images.Waqf_Project_App}`,
        webLink: "https://bhargav-j.github.io/waqf-survey/",
        gitSource: "https://github.com/Bhargav-j/waqf-survey",
        features:
          "React/Redux/Firebase & Firestore Integration/Surveyor Data Management/ Secure Modification Access/Real-time Functionality/Mobile Responsive",
        info: "Built a responsive survey app clone integrating Redux, Firebase, and Firestore for real-time, secure data management. Enabled surveyed data upload, strict modification access, ensuring data integrity. Real-time updates empower surveyors with instant insights, enhancing efficiency in field operations and data-driven decision-making.",
      },
      {
        title: "A Food Restaurant Web App",
        img: `${images.FoodRestuarentApp}`,
        webLink: "https://bhargav-j.github.io/Food-restaurant-app/",
        gitSource: "https://github.com/Bhargav-j/Food-restaurant-app",
        features:
          "React/React-Router/Modular Component Architecture/Fully Responsive/single-page application/Code Reusability",
        info: "Developed a responsive food restaurant web app using React, featuring seamless navigation between sections via React-Router without page reloads. Employed reusable components for modularity, scalability, and a consistent UI. Ensured a captivating user experience with fully responsive design and efficient component-based development.",
      },
      {
        title: "A Pizza Delivery Web App",
        img: `${images.Pizza_Delivery_app}`,
        webLink: "https://bhargav-j.github.io/pizza-delivery-app/",
        gitSource: "https://github.com/Bhargav-j/pizza-delivery-app",
        features:
          "React/Bootstrap5/React-Router/Fully Responsive/Code Reusability/Enchanced UI experience",
        info: "Created a single-page pizza delivery app with React, leveraging Bootstrap 5 for a responsive design. Utilized React-Router for seamless navigation. Prioritized code reusability, resulting in an enhanced UI experience, fostering efficiency and scalability in development for an intuitive user interface.",
      },
    ],
  },
  // JavaScript Dataset
  {
    category: "JavaScript Projects",
    description:
      "With these projects, I had the opportunity to learn key concepts in HTML, CSS, and JavaScript and gain a deeper understanding of JavaScript DOM manipulation, event handling, data storage and retrieval using local storage, and form validations. Through hands-on practice, I learned how to dynamically update the web page's content, respond to user interactions, and store and retrieve data from the browser's local storage. Additionally, implementing form validations allowed me to ensure that user input is accurate and meets the required criteria. These practical experiences have strengthened my skills in web development and provided me with a solid foundation in these fundamental concepts.",
    projects: [
      {
        title: "Todo List App",
        img: `${images.to_do_list}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Todo%20List%20App%20using%20Local%20Storage/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "This project focuses on creating a user interface to manage and organize tasks. Key points include JavaScript DOM manipulation for dynamically adding, updating, and removing tasks, and utilizing local storage to persist data between sessions, ensuring task data is retained even when the browser is closed.",
      },
      {
        title: "Drag and Drop",
        img: `${images.Simple_Book_store}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Drag%20and%20Drop/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "This project focuses on implementing interactive drag-and-drop functionality for rearranging elements on a web page. Key points include utilizing JavaScript event listeners for tracking drag events, manipulating element positions based on drag coordinates, and updating the UI in real-time to provide a seamless drag-and-drop experience.",
      },
      {
        title: "Basic Calculator App",
        img: `${images.calculator_L}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Calculator%20App/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "This project focuses on building a basic calculator functionality. Key points include capturing user input, performing mathematical operations, and displaying the results dynamically on the calculator interface. Additionally, it involves handling edge cases like division by zero and implementing clear/reset functionalities for a user-friendly calculator experience.",
      },
      {
        title: "Form Model popup",
        img: `${images.Model_popup}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Contact%20Model%20Popup/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "Project focuses on creating a modal popup window that contains a contact form. Key points include implementing event handling to open and close the modal,handling form submissions, validating user input and adding responsive design techniques for optimal display on different devices.",
      },
      {
        title: "Dropdown Menu",
        img: `${images.Model_popup}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Drop%20Down%20Navigation%20Menu%20with%20Sub%20Menu/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "The Responsive Dropdown Menu app project focuses on creating a dynamic navigation menu that adapts to different screen sizes. Key points include using media queries to implement responsive design, utilizing JavaScript to toggle the visibility of the dropdown menu, and styling the menu for optimal user experience across devices.",
      },
      {
        title: "Infinite Random photo Generator",
        img: `${images.Infinite_scrollrandomphoto_generaor}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Infinnite%20scroll%20random%20photo%20generator/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "Project focuses on fetching and displaying random photos from an lorem picsum. Key points include responsive display of images, dynamically updating the UI with new images, and implementing infinite scrolling functionality to load more photos as the user scrolls.",
      },
      {
        title: "Digital Clock",
        img: `${images.Infinite_scrollrandomphoto_generaor}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Digital%20Clock/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "The project focuses on displaying the current time in a digital format. Key points include utilizing JavaScript's Date object to retrieve the current time, using callback functions with setInterval to update the clock in real-time, and manipulating the DOM to dynamically display the time on the webpage.",
      },
      {
        title: "Infinite carousel card slider",
        img: `${images.CardSlider}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Draggable%20Infinite%20Card%20Slider/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "This app focuses on creating a visually appealing carousel that continuously displays a set of cards. Key points include implementing JavaScript logic to handle the sliding animation and navigation of the cards, utilizing scroll properties of the elements to manipulate the scroll position.",
      },
      {
        title: "Drum Kits",
        img: `${images.Drumkits}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Drum%20Kits/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "The app focuses on creating interactive drum kit sounds triggered by user input through keyboard or mouse events. Key points include mapping key or click events to corresponding drum sounds and dynamically updating the visual appearance of the drum elements.",
      },
      {
        title: "Random color Generator",
        img: `${images.randomcolor_generator}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Random%20Color%20Generator/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "The Random Color Generator app project focuses on generating random colors and displaying them on the screen. Key points include generating random hexadicimal color values, updating the background color dynamically, and providing options for copying the color value to the clipboard.",
      },
      {
        title: "Realtime Character Counter",
        img: `${images.randomcolor_generator}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Real-time%20Character%20counter/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "This project focuses on providing a live character count as users type in a text input field. Key points include capturing user input events, updating the character count in real time, and implementing input validation for maximum character limit.",
      },
      {
        title: "Accordion",
        img: `${images.Accordion}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/JavaScript%20Projects/Accordion/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/JavaScript%20Projects",
        features: "",
        info: "The Accordion app project focuses on creating an interactive accordion-style component for displaying collapsible content sections. Key points include toggling the visibility of content sections on click, applying smooth transitions for a better user experience, and managing the state of the accordion to ensure only one section is open at a time.",
      },
    ],
  },
  // Clone Dataset
  {
    category: "Clone Projects",
    description:
      "Advanced CSS techniques, including flexbox, grid layout, and responsive design, enhanced my ability to create visually appealing and adaptable interfaces. Studying real-world implementations of features like video players and commenting systems expanded my knowledge and enabled me to replicate similar functionalities. Additionally, I gained insights into best practices such as code organization, naming conventions, and optimization, ensuring maintainable and performant code in my own projects.",
    projects: [
      {
        title: "Demo Website - Tailwind CSS",
        img: `${images.DemoApp_tailwindcss}`,
        webLink: "https://acme-rockets-yb4x.onrender.com/",
        gitSource:
          "https://github.com/Bhargav-j/Webpage_using_tailwindcss/tree/main",
        features: "",
        info: "I created a responsive demo web app using HTML and Tailwind CSS, incorporating custom classes and media queries.The resulting web app seamlessly adapts to different screen sizes, providing a user-friendly interface.",
      },
      {
        title: "Finance Website Mockup",
        img: `${images.finance_website}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/Finance%20Website%20Mockup/Index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/Finance%20Website%20Mockup",
        features: "",
        info: "Developed using HTML, CSS, JavaScript, and Bootstrap, emphasizing visual resemblance to the mockup. Prioritized seamless responsiveness, and robust mobile support in the website design, integrating ChartJS for adaptive chart display.",
      },
      {
        title: "Facebook Web App",
        img: `${images.social_media}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/Socialbook/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/Socialbook",
        features: "",
        info: "I successfully developed responsive clones of Facebook's home page and profile page. The primary areas of focus were implementing flex design, ensuring responsiveness across different devices, and maintaining well-organized code structure.",
      },
      {
        title: "Youtube Web App",
        img: `${images.video_streaming}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/Youtube-clone/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/Youtube-clone",
        features: "",
        info: "Created responsive clone of YouTube home page and enhanced it by implementing an interactive video playback page. Through this project, I gained a deeper understanding of essential features such as video players and commenting systems and grid layout.",
      },
      {
        title: "Airbnb Web App",
        img: `${images.airbnb}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/Airbnb-clone/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/Airbnb-clone",
        features: "",
        info: "Developed responsive clones of Airbnb's home pages, covering popular destinations, property listings, and online packages. This project allowed me to explore the effective use of grid and flex layout combinations, ensuring the responsive display of images.",
      },
      {
        title: "LinkedIn Web App",
        img: `${images.social_media_2}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/LinkedIn-website%20clone/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/LinkedIn-website%20clone",
        features: "",
        info: "Another web app LinkedIn is cloned further strengthened my skills in responsive design, allowing me to create a seamless user experience across various devices. I gained hands-on experience in implementing responsive layouts and optimizing the design for different screen sizes.",
      },
      {
        title: "Netflix Web App",
        img: `${images.video_streaming_2}`,
        webLink:
          "https://bhargav-j.github.io/Bhargav-Jeereddy.github.io/Clone%20Projects/LinkedIn-website%20clone/index.html",
        gitSource:
          "https://github.com/Bhargav-j/Bhargav-Jeereddy.github.io/tree/main/Clone%20Projects/LinkedIn-website%20clone",
        features: "",
        info: "Created a responsive clone of the Netflix home page, enhancing my skills in creating visually appealing web pages. Additionally, I implemented an accordion feature in the FAQ section, providing an interactive and user-friendly experience for navigating through frequently asked questions.",
      },
    ],
  },
];

const Portfolio = ({portfolioRef}) => {
  return (
    <section className="min-h-custom mt-12" ref={portfolioRef} id="portfolio">
      <h1 className="font-bold sm:text-5xl text-headingsm pb-6">My Portfolio</h1>
      <div>
        {projectsDatabase.map((eachDatabase, id) => {
          return (
            <div key={id} className="">
              <h1 className="font-semibold sm:text-2xl text-subheadingsm sm:pb-6 pb-2">{eachDatabase.category}</h1>
              <p className="sm:pb-6 pb-2 text-justify sm:leading-normal leading-tight">{eachDatabase.description}</p>
              <div className="flex flex-nowrap overflow-auto gap-10 pb-6">
                {eachDatabase.projects.map((projectDetails, id) => (
                  <ProjectCard key={id} projectDetails={projectDetails} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
