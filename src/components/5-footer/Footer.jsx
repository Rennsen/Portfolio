import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#proj">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a className="flex" href="https://github.com/EDM-ESI-Deep-Minds">
            Visit EDM
            <img width="40px" src="/images/EDM.png"></img>
          </a>
        </li>
      </ul>

      <p>
        © 2024 Rayan Derradji ||
        <a style={{ color: "var(--blue)" }} href="https://github.com/rennsen">
          {" "}
          Rennsen
          <span
            style={{ alignSelf: "end" }}
            className="icon-external-link"
          ></span>
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
