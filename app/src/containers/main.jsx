import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function main({ userInfo, dispatch }) {
    if (!userInfo.userLogged) {
        return <Redirect to='/login' />
    }
    return (
        <div className="container">
            <h1 className="text-center">Logged in</h1>
        </div>
    );
}
export default connect(mapStateToProps)(main);
