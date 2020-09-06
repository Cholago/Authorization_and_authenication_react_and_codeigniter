import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    userInfo: state.UserInfo
})

function UserProfile({ userInfo, dispatch }) {
    console.log(userInfo);
    if (!userInfo.userLogged) {
        return <Redirect to='/login' />
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">My profile</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Name: <b>{userInfo.userName}</b></p>
                            <p className="card-text">Email: <b>{userInfo.userEmail}</b></p>
                        </div>
                        <div class="card-footer text-muted">
                            <button className="c-btn float-left">Change password</button>
                            <button className="c-btn float-right">Edit profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default connect(mapStateToProps)(UserProfile);
