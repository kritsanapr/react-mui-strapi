import axios from "axios";

const authUserAPI = async (data: any) => {
    try {
        return axios.post('/auth/local', data, {
            baseURL: import.meta.env.VITE_BASE_URL_API,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error in authUserAPI');
    }
}


export default { authUserAPI }