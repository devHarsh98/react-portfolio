import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
import {HiExternalLink} from "react-icons/hi"

const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "Blog Website ",
      image: "./blogwebsite.png",

      projectDescription:
        "A simple blog website built with Vite, React, Firebase Authentication, and Firestore.User authentication with Google Firebase Auth. CRUD operations for blog posts. ",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "Firebase" },
      ],
      liveUrl: "https://blog-website-kohl-gamma.vercel.app/",
      githubUrl:
        "https://github.com/devHarsh98/blog-website",
    },
    {
      id: 5,
      title: "Food Website",
      image: "./foodwebsite.png",

      projectDescription:
        "A Food Store website having a simple UI where users can find various foods, and add to cart.It has shimmer UI for better user experience. ",
      stack: [
        { id: 1, tech: "React" },
        { id: 2, tech: "Tailwind CSS" },
      ],
      liveUrl: "https://food-website-three-sable.vercel.app/",
      githubUrl:
        "https://github.com/devHarsh98/food-website",
    },
    {
      id: 4,
      title: "Bill Splitter ",
      image: "./billsplitter.png",

      projectDescription:
        "Developed a Bill Divider/Splitter application using HTML, CSS, and JavaScript. This app calculates individual shares, including tips.",
      stack: [
        { id: 1, tech: "JavaScript" },
        { id: 2, tech: "CSS" },
      ],
      liveUrl: "https://github.com/devHarsh98/bill-splitter",
      githubUrl: "https://github.com/devHarsh98/bill-splitter",
    },
    // {
    //   id: 2,
    //   title: "Nike Store",
    //   image: "./nike1.png",
    //   projectDescription:
    //     "A simple Ecommerce store of Nike. A platform where users can buy exclusive nike special edition only sneakers.",
    //   stack: [
    //     { id: 1, tech: "JavaScript" },
    //     { id: 2, tech: "CSS" },
    //   ],
    //   liveUrl: "https://nikeee-sai.netlify.app/",
    //   githubUrl:
    //     "https://github.com/Sai-Manikanta-Andey/EcommerceWebsite_NikeSpecialSeason",
    // },
    // {
    //   id: 3,
    //   title: "Dice Game",
    //   image: "./dicegame.png",
    //   projectDescription:
    //     "A fun game where you can guess a number and roll the dice, on guessing correctly you'll get points and if you guess wrong , points will be deducted.",
    //   stack: [
    //     { id: 1, tech: "React" },
    //     { id: 2, tech: "CSS" },
    //   ],
    //   liveUrl: "https://tranquil-kitten-bca2cd.netlify.app/",
    //   githubUrl: "https://github.com/Sai-Manikanta-Andey/ReactDiceGameP3",
    // },
  ];
  return (
    <section className="project-wrapper" id="Projects">
      <div className="paddings innerWidth project-container">
        <h2 className="Heading">PROJECTS</h2>
        {projectData.map((eachObj) => {
          return (
            <div className="innerContainer" key={eachObj.id}>
              <div className="project-image alignCenter">
                <img src={eachObj.image} alt={eachObj.title} width={350} />
              </div>
              <div className="project-details ">
                <div className="project-title">
                  <h4> {eachObj.title} </h4>
                </div>
                <div className="project-description secondaryText">
                  <p> {eachObj.projectDescription} </p>
                </div>
                <div className="stack ">
                  {eachObj.stack.map((eachItem) => {
                    return <div key={eachItem.id}>{eachItem.tech}</div>;
                  })}
                </div>
                <div className="innerWidth project-buttons">
                  <div className="githubButton">
                    <button>
                      {" "}
                      <a href={eachObj.githubUrl} target="_blank">
                        <div className="buttons-inside">
                          Github
                          <FaGithub />
                        </div>
                      </a>
                    </button>
                  </div>
                  <div className="liveButton">
                    <button>
                      {" "}
                      <a href={eachObj.liveUrl} target="_blank">
                        <div className="buttons-inside">
                          Preview
                          <HiExternalLink />
                        </div>
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
