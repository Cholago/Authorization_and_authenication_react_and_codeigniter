import React from 'react';
import { connect } from 'react-redux'

const NavigationBar = () => {
    return (
        <header>
            <div className="nav-bar-container">
                <input type="checkbox" name="" id="check" />

                <div className="logo-container">
                    <b className="logo">MyHome</b>
                </div>

                <div className="nav-bar">
                    <div className="nav-bar-links">
                        <ul>
                            <li className="nav-bar-link" style={{ i: ".6s" }}>
                                <a href="#">Device</a>
                            </li>
                            <li className="nav-bar-link" style={{ i: ".6s" }}>
                                <a href="#">User</a>
                            </li>
                            <li className="nav-bar-link" style={{ i: ".6s" }}>
                                <a href="#">Profile</a>
                            </li>
                            <li className="nav-bar-link" style={{ i: ".6s" }}>
                                <a href="#">History</a>
                                <div className="nav-dropdown-menu">
                                    <ul>
                                        <li className="nav-dropdown-link">
                                            <a href="#">Today</a>
                                        </li>
                                        <li className="nav-dropdown-link">
                                            <a href="#">Yesterday</a>
                                        </li>
                                        <li className="nav-dropdown-link">
                                            <a href="#">Yellow</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-bar-link" style={{ i: "1.35s" }}>
                                <a href="#">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-bar-btn" style={{ i: "1.8s" }} >
                        <a href="#" className="nav-btn transparent">Log in</a>
                        <a href="#" className="nav-btn solid">Sign up</a>
                    </div>
                </div>

                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default connect()(NavigationBar);