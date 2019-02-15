import axios from "axios";

const KEY = "AIzaSyAU3imQTtThTGwmRG0l5PB-lGTg_-4MmEM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
