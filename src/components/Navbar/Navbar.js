import React, { Component } from 'react'
import './Navbar.css';
export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="brandname">YV</div>
                <div className="nav-menu">
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>moon</li>
                    </ul>
                </div>
            </div>
        )
    }
}
