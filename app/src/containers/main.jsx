import React from 'react';
import { connect } from 'react-redux'
import NavigationBar from './navigationBar'
import { Container } from 'react-bootstrap'

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function main({ userInfo, dispatch }) {
    return (
        <Container>
            <NavigationBar />
            <h1 className="text-center">Logged in</h1>
        </Container>
    );
}
export default connect(mapStateToProps)(main);
