import React from 'react'
import './About.css';
import { Link } from "react-router-dom";
export default function About() {
    return (
        <div className="mainDiv">
            <article className="about">
                <h2 className="aboutheading">
                    About Me</h2><section className="">
                    <h3 className="pageHeader">Background</h3>
                    <p>I am a front-end developer from Pune,Maharashtra.I'm doing web development and I'm on my way to become a Full Stack Engineer.I have also worked at BAI Infosystems Private Limited, Pune as Web Designer for 4 months.</p>
                    <h3>Knowledgle In</h3>
                    <p>I'm knowledgeble in JavaScript,React, Redux,Nodejs and Sass.I invite you to take a look at my <Link to="/https://github.com/Yog9/" target="_blank">Github </Link> to see examples of the many self-initiated projects that I have completed.</p>
                </section>

            </article>
        </div>
    )
}
