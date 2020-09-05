import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function main({ userInfo, dispatch }) {
    return (
        <>
            <h1 className="text-center">Welcome</h1>
        </>
    );
}
export default connect(mapStateToProps)(main);
