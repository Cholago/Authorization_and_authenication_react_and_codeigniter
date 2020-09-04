import axios from "axios"
import * as ApiUrl from './endpoints'
import * as ActionCreator from '../actions'
import PrepareFormData from './prepareFormData'

export const LoginApi = (dispatch, data) => {
    //axios send data to the server
    dispatch(ActionCreator.setLoginBtnText('Loading ..'));
    dispatch(ActionCreator.setLoginDisabled(true));
    axios.post(ApiUrl.LOGIN_URL, PrepareFormData(data), { withCredentials: true }).then(
        res => {
            //console.log('Actual data data', res.data);
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
                //console.log('User Logged in successfully');
                localStorage.clear();
                localStorage.setItem('user_id', data.user_id);
                localStorage.setItem('user_name', data.user_name);
                localStorage.setItem('user_email', data.user_email);
                localStorage.setItem('token_id', data.token_code);
                //redirect to home page
                const userInfo = {
                    userLogged: true,
                    userId: data.user_id,
                    userName: data.user_email,
                    teckenId: data.token_code,
                }
                dispatch(ActionCreator.setLoggedInUserData(userInfo));

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
    axios.post(ApiUrl.SIGNUP_URL, PrepareFormData(data), { withCredentials: true }).then(
        res => {
            //console.log('Actual data data', res.data);
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

