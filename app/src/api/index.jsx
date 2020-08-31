import axios from "axios"
import * as ApiUrl from './endpoints'

export const LoginApi = (data) => {
    console.log('Test email ', data);

    axios.post(ApiUrl.LOGIN_URL, data).then(res => {
        console.log('Actual data data', res.data)
    }).catch(error => console.log(error));
}