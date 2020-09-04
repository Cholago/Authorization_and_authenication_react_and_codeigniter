import * as Actions from '../actions/types';

//Auth pages state
export const setLoginBtnText = (value) => (
    {
        type: Actions.SET_LOGIN_BUTTON_TEXT,
        payload: {
            value
        }
    }
);

export const setSignupBtnText = (value) => (
    {
        type: Actions.SET_SIGNUP_BUTTON_TEXT,
        payload: {
            value
        }
    }
);

export const setLoginError = (value) => (
    {
        type: Actions.SET_LOGIN_ERROR,
        payload: {
            value
        }
    }
);

export const setSignupError = (value) => (
    {
        type: Actions.SET_SIGNUP_ERROR,
        payload: {
            value
        }
    }
);

export const setLoginDisabled = (value) => (
    {
        type: Actions.SET_LOGIN_DISABLED,
        payload: {
            value
        }
    }
);

export const setSignupDisabled = (value) => (
    {
        type: Actions.SET_SIGNUP_DISABLED,
        payload: {
            value
        }
    }
);

export const setSignupSuccess = (value) => (
    {
        type: Actions.SET_SIGNUP_SUCCESS,
        payload: {
            value
        }
    }
);

//Set logged in user information
export const setLoggedInUserData = (user) => (
    {
        type: Actions.SET_USER,
        payload: {
            user
        }
    }
);
