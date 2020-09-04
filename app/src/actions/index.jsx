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

export const syncUserLoginState = () => {
    return (dispatch) => {
        return axios.get(ApiUrl.IS_LOGGED_IN_URL, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                //dispatch(fetchPosts(res.data))
            })
            .catch(error => console.log(error));
    };
};

const PrepareFormData = data => {
    //convert data object to form data
    var formData = new FormData();
    for (var key of Object.keys(data)) {
        formData.append(key, data[key]);
        //console.log(key + " -> " + data[key])
    }
    return formData;
}

