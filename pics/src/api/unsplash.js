import axios from 'axios';

const unsplashAccessKey = 'e70716ad8b3cb11909617301c0b564fd4d8274f6e750145a9f783516e7eba640';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`
    }
});

export default unsplash;
