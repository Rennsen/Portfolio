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
    height: 100,
  },
  {
    projectTitle: "DocuNarrator AI",
    category: "ML & AI",
    description:
      "Welcome to DocuNarrator AI, where your life is the documentary! From making coffee to lounging on the couch, this AI narrates your every move with professional flair. Who knew everyday activities could be so compelling? Spoiler alert: You're the star!",
    imgPath: "./images/DocuNarrator AI Cover.png",
    link: "https://github.com/Rennsen/DocuNarrator-AI",
    height: 140,
  },
  {
    projectTitle: "Procedural Island Generator",
    category: "Unity & UE",
    description:
      "This project is a simplified example of an advanced simulation. It generates a 3D procedural island with a blocky design similar to Minecraft. The island includes a few trees placed procedurally, and a water dynamic logic to make the island feel more alive.",
    imgPath: "./images/Procedurally Generated Island.png",
    link: "https://github.com/Rennsen/Procedural-Generation-Simulation",
    height: 140,
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
                      <div className="icon-link5"></div>
                      <div className="icon-github"></div>
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
