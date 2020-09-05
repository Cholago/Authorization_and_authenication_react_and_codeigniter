import React from 'react';
import { connect } from 'react-redux'
import NavigationBar from './navigationBar'

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function main({ userInfo, dispatch }) {
    return (
        <>
            <NavigationBar />
            <h1 className="text-center">Logged in</h1>
        </>
    );
}
export default connect(mapStateToProps)(main);
