import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="mainDiv">
      <article className="about">
        <h2 className="aboutheading"> About Me </h2>{" "}
        <section className="">
          <h3 className="pageHeader"> Background </h3>{" "}
          <p>
            I am a front-end developer. I am currently working as SDE at Ignite
            Solutions, Pune
          </p>{" "}
          <h3> Skills </h3>{" "}
          <ul>
            <li> JavaScript </li> <li> React </li> <li> Redux </li>{" "}
            <li> Node js(Express) </li> <li> Angular / Angular.js </li>{" "}
            <li> Mongo DB </li> <li> CSS3 </li> <li> Sass </li>{" "}
            <li> BootStrap </li> <li> Git </li>{" "}
          </ul>{" "}
          {/* <p>
            I invite you to take a look at my{" "}
            <a
              href="https://github.com/Yog9/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github{" "}
            </a>{" "}
            to see examples of the many self - initiated projects that I have
            completed.{" "}
          </p>{" "} */}
        </section>{" "}
      </article>{" "}
    </div>
  );
}
