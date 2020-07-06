import api from 'axios'

export function apiLogin(data) {
    const response = api.post('http://localhost:8000/api/login_google', data)
        .then((response) =>{
            if(response.status == 200) {
                //setClientToken(response.data.token)
                localStorage.setItem('token', response.data.token)
                return response.data.user;
            }
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
    return response;
}