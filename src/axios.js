import axios from "axios";

const instance = axios.create({
    //The API {cloud func} url
    baseURL: 'https://us-central1-clone-4aa1f.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-4aa1f/us-central1/api'
});

export default instance;