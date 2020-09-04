import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})
const IsLoggedIn = ({ userInfo }) => {
    if (userInfo.userLogged) {
        return <Redirect to='/' />
    }
    return <Redirect to='/login' />

}
export default connect(mapStateToProps)(IsLoggedIn);