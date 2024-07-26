import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          {/* <li>
            <a href="#">Articles</a>
          </li> */}
          <li>
            <a href="#proj">Projects</a>
          </li>
          {/* <li>
            <a href="#">Speaking</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-clear"
                onClick={() => setshowModal(false)}
              />
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            {/* <li>
              <a href="#">Articles</a>
            </li> */}
            <li>
              <a href="#proj">Projects</a>
            </li>
            {/* <li>
              <a href="#">Speaking</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
