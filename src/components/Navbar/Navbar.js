import React, { Component } from 'react'
import Sun from '../Sun';
import Moon from '../Moon';
import './Navbar.css';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    state = {
        isSun: true
    }

    handleTheme = () => {
        this.setState(state => ({
            isSun: !state.isSun
        }));
    }
    render() {
        return (
            <div className="nav">
                <Link to="/"><div className="brandname">YV</div></Link>
                <div className="nav-menu">
                    <ul>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/projects"><li>Projects</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        <li onClick={this.handleTheme}>{this.state.isSun ? <Sun /> : <Moon />}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
