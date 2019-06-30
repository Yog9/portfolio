import React from 'react'
import './Projects.css';
import { Link } from "react-router-dom";
export default function Projects() {
    return (
        <div className="mainDiv">
            <div className="project">
                <div className="project-list">
                    <div className="project-item">
                        <h3>Movie Flex (On-going)</h3>
                        <p><strong>Description:</strong> Browse your favorite Movies, TV shows. Search for specific movies and TV shows.Browse the latest and greatest films and to find information about them.</p>
                        <p><strong> Technologies Used:</strong> JavaScript, ReactJS, Redux, CSS3.</p>
                        <div className="buttons">
                            <Link to="https://github.com/Yog9/Movie-Flex" target="_blank">Souce Code</Link>
                            <Link to="" target="_blank">Live Demo</Link>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Snap Scout</h3>
                        <p><strong>Description:</strong> Snap Scout is React Gallery created using React. And using React Router the routes were setup for four default pages and a search page. Also the images were displayed using Flickr API using axios to fetch the data. </p>
                        <p><strong> Technologies Used:</strong> JavaScript, ReactJS, CSS3</p>
                        <div className="buttons">
                            <Link to="https://github.com/Yog9/SnapScout" target="_blank">Souce Code</Link>
                            <Link to="https://yog9.github.io/SnapScout/" target="_blank">Live Demo</Link>
                        </div>
                    </div>

                    <div className="project-item">
                        <h3>Express Portfolio</h3>
                        <p><strong>Description:</strong>Express Portfolio showcases the projects that I have built. It stores all the data about the project in a JSON file. It uses Pug to generate a template that utilizes JSON to generate a markup that is displayed in the browser.</p>
                        <p><strong>Technologies Used:</strong>Nodejs,Express,Pug</p>
                        <div className="buttons">
                            <Link to="https://github.com/Yog9/Express-Portfolio/" target="_blank">Souce Code</Link>
                            <Link to="https://express-portfolio1.herokuapp.com/" target="_blank">Live Demo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
