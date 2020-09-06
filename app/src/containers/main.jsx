import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function main({ userInfo, dispatch }) {
    if (!userInfo.userLogged) {
        return <Redirect to='/login' />
    }
    return (
        <>
            <h1 className="text-center">Welcome</h1>
        </>
    );
}
export default connect(mapStateToProps)(main);
