import axios from "axios"
import * as ApiUrl from './endpoints'

export const LoginApi = (data) => {
    console.log('Test email ', data);

    axios.post(ApiUrl.LOGIN_URL, { email: "wilsonchola065@gmail.com", password: "12345678" }).then(res => {
        console.log('Actual data data', res.data)
    }).catch(error => console.log(error));
}