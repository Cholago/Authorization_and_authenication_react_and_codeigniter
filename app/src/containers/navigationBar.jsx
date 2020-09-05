import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

const NavigationBar = ({ userInfo }) => {
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
                            <li className="nav-bar-link active" style={{ '--i': ".6s" }}>
                                <Link to="/device">Device</Link>
                            </li>
                            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                                <Link to="/users">Users</Link>
                            </li>
                            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                                <Link to="/history">History</Link>
                                <div className="nav-dropdown-menu">
                                    <ul>
                                        <li className="nav-dropdown-link">
                                            <Link to="/profile">Log</Link>
                                        </li>
                                        <li className="nav-dropdown-link">
                                            <Link to="/images">Images</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-bar-link" style={{ '--i': "1.35s" }}>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-bar-btn" style={{ '--i': "1.8s" }} >
                        <Link to="/profile" className="nav-btn transparent">{userInfo.userName}</Link>
                        <button className="nav-btn solid">Sign out</button>
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
export default connect(mapStateToProps)(NavigationBar);