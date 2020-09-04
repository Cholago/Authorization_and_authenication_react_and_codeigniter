import { combineReducers } from 'redux';
import UserInfo from './user';
import Posts from './posts'
import AuthPageState from './authState'

export default combineReducers({
    UserInfo, Posts, AuthPageState
});