import { SET_USER, UNSET_USER } from '../actions/types';
let defaultState = {
    userLogged: false,
}

const UserInformation = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload.user
        case UNSET_USER:
            return action.payload.user
        default:
            return state
    }
}

export default UserInformation;