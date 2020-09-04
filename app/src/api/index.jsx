import axios from "axios"
import * as ApiUrl from './endpoints'

export const LoginApi = (data) => {
    //axios send data to the server
    axios.post(ApiUrl.LOGIN_URL, PrepareFormData(data)).then(res => {
        console.log('Actual data data', res.data)
    }).catch(error => console.log(error));
}

export const SignUpApi = (data) => {
    //axios send data to the server
    axios.post(ApiUrl.SIGNUP_URL, PrepareFormData(data)).then(res => {
        console.log('Actual data data', res.data)
    }).catch(error => console.log(error));
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