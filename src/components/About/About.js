import React from 'react'
import './About.css';
export default function About() {
    return (
        <div className="mainDiv">
            <article class="about">

                <h2 class="aboutheading">
                    About Me</h2><section class="">
                    <h3 class="pageHeader">Background</h3>
                    <p>I am a front-end developer from Pune,Maharashtra.
                    I'm doing web development and I'm on my way to becoming a Full Stack Engineer. I have learned programming from various resources . I have worked at TaxiVaxi Pune as Web Designer for 3 months.</p></section><section class="">
                    <h3>Knowledgle In</h3>
                    <p>I'm knowledgeble in JavaScript,React, Redux,Nodejs and Sass. You can checkout my <a href="/projects">projects</a> (or)
        at my <a href="https://github.com/Yog9"
                            target="_blank" rel="noopener noreferrer">github</a> page.</p>
                </section>

            </article>
        </div>
    )
}
