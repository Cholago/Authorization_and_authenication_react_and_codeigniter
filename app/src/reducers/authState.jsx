import * as Actions from '../actions/types';
let defaultState = {
    loginBtnText: "Login",
    signupBtnText: "Signup",
    loginDisabled: false,
    signuDisabled: false,
    loginError: false,
    signupError: false,
    signupSuccess: false,
    signOutBtnText: "Sign out",
}

const AuthPageState = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.SET_LOGIN_BUTTON_TEXT:
            return Object.assign({}, state, {
                loginBtnText: action.payload.value
            })
        case Actions.SET_SIGNUP_BUTTON_TEXT:
            return Object.assign({}, state, {
                signupBtnText: action.payload.value
            })
        case Actions.SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.payload.value
            })
        case Actions.SET_SIGNUP_ERROR:
            return Object.assign({}, state, {
                signupError: action.payload.value
            })
        case Actions.SET_LOGIN_DISABLED:
            return Object.assign({}, state, {
                loginDisabled: action.payload.value
            })
        case Actions.SET_SIGNUP_DISABLED:
            return Object.assign({}, state, {
                signuDisabled: action.payload.value
            })
        case Actions.SET_SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                signupSuccess: action.payload.value
            })
        case Actions.SIGN_OUT_USER:
            return Object.assign({}, state, {
                signOutBtnText: action.payload.value
            })
        default:
            return state
    }
}
export default AuthPageState;