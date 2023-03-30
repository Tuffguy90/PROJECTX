import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

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

const userCRUD = new CustomStore({
    key: 'id',
    load: async (e) => {
        return sendRequest(`${API_BASE_URL}/get-user-list`).then(({ data }) => {
            return {
                data: data?.data,
                totalCount: data?.totalCount
            };
        });
    },
    insert: (values) => sendRequest(`${API_BASE_URL}/create-user`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/create-user`, 'POST', {
            key,
            ...values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const getUserList = async (user_id = null) => {
    let url = `${API_BASE_URL}/get-user-list`;
    if (user_id !== null) {
        url += `?user_id=${user_id}`;
    }
    return axios({
        url,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const updateUserProfileData = async (data) => {
    let url = `${API_BASE_URL}/create-user`;
    return axios({
        url,
        method: 'POST',
        data,
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const authService = { tokenExpiryCheck, login, changePassword, userCRUD, getUserList, updateUserProfileData };
export default authService;
