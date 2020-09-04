import axios from "axios"
import * as ApiUrl from './endpoints'
import * as ActionCreator from '../actions'

export const LoginApi = (dispatch, data) => {
    //axios send data to the server
    dispatch(ActionCreator.setLoginBtnText('Loading ..'));
    dispatch(ActionCreator.setLoginDisabled(true));
    axios.post(ApiUrl.LOGIN_URL, PrepareFormData(data)).then(
        res => {
            console.log('Actual data data', res.data);
            const data = res.data;
            dispatch(ActionCreator.setLoginBtnText('Login'));
            dispatch(ActionCreator.setLoginDisabled(false));
            if (data.error) {
                dispatch(ActionCreator.setLoginError(data.error_msg));
                //Reset error massage after 5 seconds
                setTimeout(function () {
                    dispatch(ActionCreator.setLoginError(false));
                }, 5000);

            }
            else {
                console.log('User Logged in succfully')
            }
        }
    ).catch(
        error => console.log(error)
    );
}

export const SignUpApi = (dispatch, data) => {
    dispatch(ActionCreator.setSignupBtnText('Loading'));
    dispatch(ActionCreator.setSignupDisabled(true));
    //axios send data to the server
    axios.post(ApiUrl.SIGNUP_URL, PrepareFormData(data)).then(
        res => {
            console.log('Actual data data', res.data);
            const data = res.data;
            dispatch(ActionCreator.setSignupBtnText('Signup'));
            dispatch(ActionCreator.setSignupDisabled(true));
            if (data.error) {
                dispatch(ActionCreator.setSignupError(data.error_msg));
                //Reset error massage after 5 seconds
                setTimeout(function () {
                    dispatch(ActionCreator.setSignupError(false));
                }, 5000);
            }
            else {
                dispatch(ActionCreator.setSignupSuccess(data.msg));
                //Reset error massage after 7 seconds
                setTimeout(function () {
                    dispatch(ActionCreator.setSignupSuccess(false));
                }, 7000);
            }
        }
    ).catch(error => console.log(error));
}

const PrepareFormData = data => {
    //convert data object to form data
    var formData = new FormData();
    for (var key of Object.keys(data)) {
        formData.append(key, data[key]);
        //console.log(key + " -> " + data[key])
    }
    return formData;
}