/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/animations/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0, 0)" }}
            animate={{ transform: "scale(1, 1)" }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
            src="/images/me.gif"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Aspiring software engineer, game developer and founder.
        </motion.h1>
        <p className="subtitle">
          I'm Rayan Derradji, a passionate computer science student based in
          Algeria, aspiring to become a software engineer with a particular
          interest in the video game industry. I founded EDM "ESi Deep Minds,"
          an organization dedicated to sharing innovative computer science
          projects across various fields. Our mission is to empower clients to
          turn their unique concepts and ideas into reality.
        </p>
        <div className="all-icons flex">
          <a href="https://x.com/_Rennsen_">
            <span className="icon icon-x"></span>
          </a>

          <a href="https://www.instagram.com/renpaisen">
            <span className="icon icon-instagram"></span>
          </a>

          <a href="https://github.com/Rennsen">
            <span className="icon icon-github"></span>
          </a>

          <a href="https://www.linkedin.com/in/derradji-rayan-3165312aa/">
            <span className="icon icon-linkedin2"></span>
          </a>

          <a href="https://www.paypal.me/Rayan-Derradji">
            <span className="icon-paypal"></span>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          loop={true}
          animationData={devAnimation}
        ></Lottie>
      </div>
    </section>
  );
}
