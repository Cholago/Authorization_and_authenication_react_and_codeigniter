import axios from "axios"
import * as Actions from '../actions/types';
import * as ApiUrl from '../api/endpoints'

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

//sync user state
export const syncUserLoginState = () => {
    return (dispatch) => {
        return axios.get(ApiUrl.IS_LOGGED_IN_URL, { withCredentials: true })
            .then(res => {
                //console.log('Is logged', res.data);
                const data = res.data;
                if (data.is_logged) {
                    localStorage.clear();
                    localStorage.setItem('user_id', data.user_id);
                    localStorage.setItem('user_name', data.user_name);
                    localStorage.setItem('user_email', data.user_email);
                    localStorage.setItem('token_id', data.token_code);
                    //redirect to home page
                    const userInfo = {
                        userLogged: true,
                        userId: data.user_id,
                        userName: data.user_name,
                        userEmail: data.user_email,
                        teckenId: data.token_code,
                    }
                    dispatch(setLoggedInUserData(userInfo));

                }
                //dispatch(fetchPosts(res.data))
            })
            .catch(error => console.log(error));
    };
};


