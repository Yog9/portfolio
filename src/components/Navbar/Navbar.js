import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
export default class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <Link to="/"><div className="brandname">YV</div></Link>
                <div className="nav-menu">
                    <ul>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>

                </div>
            </div>
        )
    }
}
