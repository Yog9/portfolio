import React from 'react'
import './Projects.css';
export default function Projects() {
    return (
        <div className="mainDiv">
            <div className="project">
                <div className="project-list">
                    <div className="project-item">
                        <h3>Movie Flex</h3>
                        <p><strong>Description:</strong>Movie Flex is a movie application created with React/Redux in which users can browse Movies and TV shows from TMDB API to find more information about them. Also provided a search functionality for searching movies/TV shows.</p>
                        <p><strong> Technologies Used:</strong> JavaScript, ReactJS, Redux, CSS3.</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Movie-Flex" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/Movie-Flex" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Snap Scout</h3>
                        <p><strong>Description:</strong>Snap Scout is a gallery created using React and React Router. The Routes were setup for four default pages and a search page. Also the images were displayed using the Flickr API and axios to fetch data.</p>
                        <p><strong> Technologies Used:</strong> JavaScript, ReactJS, CSS3</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/SnapScout" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/SnapScout/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Express Portfolio</h3>
                        <p><strong>Description:</strong>Express Portfolio showcases the projects that I have built. It stores all the data about the projects in a JSON file. It uses Pug to generate a template that utilizes JSON to generate a markup that is displayed in the browser.</p>
                        <p><strong>Technologies Used:</strong>Nodejs, Express, Pug, Foundation</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Express-Portfolio/" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://express-portfolio1.herokuapp.com/"  rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    <div className="project-item">
                        <h3>Bill Generator</h3>
                        <p><strong>Description:</strong>Bill Generator is a full-stack app made to generate bill for food-items that the user orders. It is built from scratch using React, React Router, Node js and a NoSQL database mongo DB.</p>
                        <p><strong>Technologies Used:</strong>React, React Router, Nodejs, Mongo DB</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Bill-Generator" rel="noopener noreferrer" target="_blank">Souce Code</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Shopping Cart</h3>
                        <p><strong>Description:</strong>Shopping Cart is an ecommerce website made with react. User can shop for shirts and also add and remove items from  the cart.</p>
                        <p><strong>Technologies Used:</strong>React, React Router</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/shopping-cart" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/shopping-cart/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    

                </div>
                <h2>Other Projects</h2>
                <div className ="project-list">
                <div className="project-item">
                        <h3>Meme Generator</h3>
                        <p><strong>Description:	&nbsp;</strong>Meme Generator uses an api to fetch images by using axios. User can insert text on different images to make memes.</p>
                        <p><strong>Technologies Used:&nbsp;</strong>React js , CSS 3</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/meme-generator/" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/meme-generator/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <h3>Web Style Guide</h3>
                        <p><strong>Description:&nbsp;</strong>Web Style Guide is a style guide created using SASS fundamentals like variables, mixins, and functions.</p>
                        <p><strong>Technologies Used:&nbsp;</strong>SASS, HTML5</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Web-Style-Guide" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/Web-Style-Guide/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Web App Dashboard</h3>
                        <p><strong>Description:&nbsp;</strong>Web App Dashboard is a web dashboard that uses Chart.js to create line, bar, and pie charts and also uses local storage to save user changes.</p>
                        <p><strong>Technologies Used:&nbsp;</strong>Javascript, Chart js</p>
                        <div className="buttons">
                            <a href="https://github.com/Yog9/Web-App-Dashboard/" rel="noopener noreferrer" target="_blank">Souce Code</a>
                            <a href="https://yog9.github.io/Web-App-Dashboard/" rel="noopener noreferrer" target="_blank">Live Demo</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
