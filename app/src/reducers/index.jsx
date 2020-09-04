import { combineReducers } from 'redux';
import User from './user';
import Posts from './posts'
import AuthPageState from './authState'

export default combineReducers({
    User, Posts, AuthPageState
});