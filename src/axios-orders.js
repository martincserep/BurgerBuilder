import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-a7527.firebaseio.com'
});

export default instance;