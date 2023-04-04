import axios from 'axios';

const request = axios.create({
    baseURL: process.env.baseURL,
});
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export default request;
