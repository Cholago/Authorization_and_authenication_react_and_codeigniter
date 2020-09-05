import React from 'react';
import { connect } from 'react-redux'

const NavigationBar = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <b className="logo">MyHome</b>

                </div>
                <div className="nav-bar">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-bar-link"> <a href="#">Device</a> </li>
                            <li className="nav-bar-link"> <a href="#">Users</a> </li>
                            <li className="nav-bar-link"> <a href="#">Profile</a> </li>
                            <li className="nav-bar-link"> <a href="#">History</a>
                                <div className="dropdown-nav-bar-link">
                                    <ul>
                                        <li className="dropdown-nav-link"> <a href="#">Today</a> </li>
                                        <li className="dropdown-nav-link"> <a href="#">Yesta</a> </li>
                                        <li className="dropdown-nav-link"> <a href="#">Yello</a> </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-links-btn">
                        <a href="#" className="nav-btn transparent">Setings</a>
                        <a href="#" className="nav-btn solid">Logout</a>
                    </div>

                </div>

            </div>
        </header>
    );
}
export default connect()(NavigationBar);