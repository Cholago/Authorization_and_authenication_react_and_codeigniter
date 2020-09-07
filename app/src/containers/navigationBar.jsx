import React from 'react';
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';
import { syncSignOutUser } from '../actions'

const LoggedInMenu = () => {
    return (
        <>
            <li className="nav-bar-link active" style={{ '--i': ".6s" }}>
                <NavLink to="/device" activeClassName="nav-bar-link-active" >Device</NavLink>
            </li>
            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                <NavLink to="/users" activeClassName="nav-bar-link-active">Users</NavLink>
            </li>
            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                <NavLink to="/profile" activeClassName="nav-bar-link-active">Profile</NavLink>
            </li>
            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                <NavLink to="/history" activeClassName="nav-bar-link-active">History</NavLink>
            </li>
            <li className="nav-bar-link" style={{ '--i': "1.35s" }}>
                <NavLink to="/about" activeClassName="nav-bar-link-active">About</NavLink>
            </li>
        </>

    )
}

const LoggedOutMenu = () => {
    return (
        <>
            <li className="nav-bar-link" style={{ '--i': ".6s" }}>
                <NavLink to="/contact" activeClassName="nav-bar-link-active">Contact</NavLink>
            </li>
            <li className="nav-bar-link" style={{ '--i': "1.35s" }}>
                <NavLink to="/about" activeClassName="nav-bar-link-active">About</NavLink>
            </li>
        </>

    )
}

const mapStateToProps = state => ({
    userInfo: state.UserInfo,
    authState: state.AuthPageState
})

const NavigationBar = ({ userInfo, authState, dispatch }) => {
    //console.log('User ', userInfo)
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
                            {userInfo.userLogged &&
                                LoggedInMenu()
                            }
                            {!userInfo.userLogged &&
                                LoggedOutMenu()
                            }
                        </ul>
                    </div>

                    <div className="nav-bar-btn" style={{ '--i': "1.8s" }} >
                        {userInfo.userLogged &&
                            <>
                                <Link to="/profile" className="nav-btn transparent">{userInfo.userName}</Link>
                                <button className="nav-btn solid" onClick={() => { dispatch(syncSignOutUser()) }}>{authState.signOutBtnText}</button>
                            </>
                        }
                        {!userInfo.userLogged &&
                            <>
                                <Link to="/login" className="nav-btn transparent">Login</Link>
                                <Link to="/signup" className="nav-btn solid">Signup</Link>
                            </>
                        }
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