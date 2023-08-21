import axios from 'axios';

export const getNews = async (API_URL) => {
    const URL = 'https://inshort-app-server1.vercel.app';
    // const URL = 'http://localhost:8000';

    try {
        console.log(API_URL);
        return await axios.get(`${URL}${API_URL}`);
    } catch (error) {
        console.log('error while calling get news api', error);
    }
}
