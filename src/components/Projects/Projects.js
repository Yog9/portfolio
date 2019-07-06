import React from 'react'
import './Projects.css';
export default function Projects() {
    return (
        <div className="mainDiv">
            <div className="project">
                <div className="project-list">
                    <div className="project-item">
                        <h3>Movie Flex</h3>
                        <p><strong>Description</strong><br/>Movie Flex is another version of legendary movie database built using React/Redux. It is a multi-page website in which users can browse TV shows and movies. The movies and TV shows data is fetched from TMDB API using Axios. Used TMDB search API to provide users with a search feature in the website.</p>
                        <p><strong> Technologies Used<br/></strong> JavaScript, ReactJS, Redux, CSS3.</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Movie-Flex" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/Movie-Flex" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>SnapScout</h3>
                        <p><strong>Description</strong><br/>SnapScout is a multi-page image gallery created using React. Used Axios to write API calls. Provided search functionality and fetched images using Flickr API.</p>
                        <p><strong> Technologies Used</strong><br/>ReactJS, CSS3</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/SnapScout" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/SnapScout/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Express Portfolio</h3>
                        <p><strong>Description</strong><br/>It is a portfolio showcasing all my projects and skills. Used Node.js, Express.js and Pug templating engine to build the same.</p>
                        <p><strong>Technologies Used</strong><br/>Node.js, Express.js, Pug, Zurb Foundation</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Express-Portfolio/" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://express-portfolio1.herokuapp.com/"  rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Bill Generator</h3>
                        <p><strong>Description</strong><br/>Bill Generator is a full-stack app made to generate bill for food-items that the user orders. It is built from scratch using React, React Router, Node js and a NoSQL database mongo DB.</p>
                        <p><strong>Technologies Used</strong><br/>React, React Router, Node.js, Express.js, Mongo DB</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Bill-Generator" rel="noopener noreferrer" target="_blank">Source Code</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Shopping Cart</h3>
                        <p><strong>Description</strong><br/>Shopping Cart is a multipage e-commerce website for selling shoes, built using React/Redux.</p>
                        <p><strong>Technologies Used</strong><br/>React, React Router and Redux</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/shopping-cart" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/shopping-cart/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    

                </div>
                <h2>Other Projects</h2>
                <div className ="project-list">
                <div className="project-item">
                        <h3>Meme Generator</h3>
                        <p><strong>Description</strong><br/>
                        Meme Generator uses an api to fetch images by using axios. User can insert text on different images to make memes.</p>
                        <p><strong>Technologies Used</strong><br/>Reactjs, CSS 3</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/meme-generator/" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/meme-generator/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <h3>Web Style Guide</h3>
                        <p><strong>Description</strong><br/>Web Style Guide is a style guide created using SASS fundamentals like variables, mixins, and functions.</p>
                        <p><strong>Technologies Used</strong><br/>SASS, HTML5</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Web-Style-Guide" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/Web-Style-Guide/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Web App Dashboard</h3>
                        <p><strong>Description</strong><br/>Web App Dashboard is a web dashboard that uses Chart.js to create line, bar, and pie charts and also uses local storage to save user changes.</p>
                        <p><strong>Technologies Used</strong><br/>Javascript, Chart js</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Web-App-Dashboard/" rel="noopener noreferrer" target="_blank">Source Code</a>
                            <a href="https://yog9.github.io/Web-App-Dashboard/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
