import { combineReducers } from 'redux';
import User from './user';
import Posts from './posts'

export default combineReducers({
    User, Posts
});