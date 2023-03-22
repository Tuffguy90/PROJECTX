import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';

const tokenExpiryCheck = async () => {
    return axios({
        url: `${API_BASE_URL}`,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.message;
    });
};

const login = async (data) => {
    return axios({
        url: `${API_BASE_URL}/login`,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).catch((err) => {
        return err.response;
    });
};

const changePassword = async (data) => {
    return axios({
        url: `${API_BASE_URL}/change-password`,
        method: 'POST',
        data: data,
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const authService = { tokenExpiryCheck, login, changePassword };
export default authService;
