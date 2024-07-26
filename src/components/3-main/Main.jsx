import { useState } from "react";
import Lottie from "lottie-react";
import gamedevAnimation from "../../../public/animations/game.json";
import "./Main.css";
import { AnimatePresence, motion } from "framer-motion";

const myProjects = [
  {
    projectTitle: "Advanced Procedural Generation",
    category: "Unity & UE",
    description:
      "This project showcases a sophisticated application of procedural generation, featuring infinite terrain with dynamic elevations. Players can navigate through a vast, generated world, each uniquely linked to its seed, offering up to 10 billion possible variations",
    imgPath: "./images/Advanced Procedural Generation Cover.png",
    link: "https://github.com/Rennsen/Advanced-Procedural-Generation-Simulation",
    attachment:
      "https://github.com/Rennsen/Advanced-Procedural-Generation-Simulation",
    height: 100,
  },
  {
    projectTitle: "DocuNarrator AI",
    category: "ML & AI",
    description:
      "Welcome to DocuNarrator AI, where your life is the documentary! From making coffee to lounging on the couch, this AI narrates your every move with professional flair. Who knew everyday activities could be so compelling? Spoiler alert: You're the star!",
    imgPath: "./images/DocuNarrator AI Cover.png",
    link: "https://github.com/Rennsen/DocuNarrator-AI",
    attachment: "https://github.com/Rennsen/DocuNarrator-AI",
    height: 140,
  },
  {
    projectTitle: "Procedural Island Generator",
    category: "Unity & UE",
    description:
      "This project is a simplified example of an advanced simulation. It generates a 3D procedural island with a blocky design similar to Minecraft. The island includes a few trees placed procedurally, and a water dynamic logic to make the island feel more alive.",
    imgPath: "./images/Procedurally Generated Island.png",
    link: "https://github.com/Rennsen/Procedural-Generation-Simulation",
    attachment: "https://github.com/Rennsen/Procedural-Generation-Simulation",
    height: 140,
  },
  {
    projectTitle: "Portfolio",
    category: "Web Dev",
    description:
      "This is my portfolio website. I am currently working on it using mainly React, Vite and Firebase (+ other frameworks). I hope to add more projects in the future!",
    imgPath: "./images/Portfolio Cover.png",
    link: "https://github.com/Rennsen/Portfolio",
    attachment: "https://ren-s-portfolio.web.app",
    height: 155,
  },
  {
    projectTitle: "Sieve of Eratosthenes algorithm",
    category: "Higher School",
    description:
      "This project is a collaborative effort between Rayan Derradji and Tarek Ait Ahmed for the Practical Work N°1 on Linked List. The aim of this project is to implement a search algorithm for finding prime numbers up to a specified number, using linked lists and dynamic arrays with the Sieve of Eratosthenes algorithm",
    imgPath: "./images/Sieve-of-Eratosthenes Cover.jpg",
    link: "https://github.com/Rennsen/TP1_ALSDD_R-T",
    attachment: "https://github.com/Rennsen/TP1_ALSDD_R-T",
    height: 70,
  },
  {
    projectTitle: "BST Traversals",
    category: "Higher School",
    description:
      "This project, developed in collaboration with Ait Ahmed Tarek, supervised by Pr D.E Zegour, focuses on implementing and animating two types of traversals for a Binary Search Tree (BST) using the C programming language. Additionally, we have utilized the Z language, which is specific to our higher school (ESI), to complement the algorithmic aspect of this project.",
    imgPath: "./images/BST Cover.png",
    link: "https://github.com/Rennsen/TP2_ALSDD_Z",
    attachment: "https://github.com/Rennsen/TP2_ALSDD_Z",
    height: 79,
  },
];

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setcurrentActive("unity");
            const newArr = myProjects.filter((item) => {
              return item.category === "Unity & UE";
            });
            setarr(newArr);
          }}
          className={currentActive === "unity" ? "active" : null}
        >
          Unity & UE
        </button>
        <button
          onClick={() => {
            setcurrentActive("ml");
            const newArr = myProjects.filter((item) => {
              return item.category === "ML & AI";
            });
            setarr(newArr);
          }}
          className={currentActive === "ml" ? "active" : null}
        >
          ML & AI
        </button>
        <button
          onClick={() => {
            setcurrentActive("web");
            const newArr = myProjects.filter((item) => {
              return item.category === "Web Dev";
            });
            setarr(newArr);
          }}
          className={currentActive === "web" ? "active" : null}
        >
          Web Dev
        </button>
        <button
          onClick={() => {
            setcurrentActive("high");
            const newArr = myProjects.filter((item) => {
              return item.category === "Higher School";
            });
            setarr(newArr);
          }}
          className={currentActive === "high" ? "active" : null}
        >
          Higher School
        </button>

        <Lottie
          className="game-animation"
          loop={true}
          style={{ width: 300 }}
          animationData={gamedevAnimation}
        ></Lottie>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0, 0)" }}
                animate={{ transform: "scale(1, 1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img
                  width={280}
                  height={item.height}
                  src={item.imgPath}
                  alt=""
                />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="description">{item.description}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.attachment}>
                        <span className="icon-link5"></span>
                      </a>

                      <a href={item.link}>
                        <span className="icon-github"></span>
                      </a>
                    </div>
                    <a
                      style={{ gap: "1px" }}
                      className="link flex"
                      href={item.link}
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
