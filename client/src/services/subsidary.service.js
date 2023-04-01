import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const getSubsidaries = async () => {
    return axios({
        url: `${API_BASE_URL}/get-subsidaries`,
        method: 'GET',
        headers: authHeader()
    })
        .catch((err) => {
            return err.message;
        })
        .then((response) => response?.data);
};

const getSubsidaryMattrix = async () => {
    return axios({
        url: `${API_BASE_URL}/get-subsidary-mattrix`,
        method: 'GET',
        headers: authHeader()
    })
        .catch((err) => {
            return err.message;
        })
        .then((response) => response?.data);
};

const subsidaryStore = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-subsidaries`),
    insert: (values) => sendRequest(`${API_BASE_URL}/create-subsidary`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/create-subsidary`, 'POST', {
            key,
            values: values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const userSubsidary = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/user-subsidary`),
    insert: (values) => sendRequest(`${API_BASE_URL}/map-user-subsudary`, 'POST', { ...values }),
    // update: (key, values) =>
    //     sendRequest(`${API_BASE_URL}/map-user-subsudary`, 'POST', {
    //         key,
    //         values: values
    //     })
    remove: (key) =>
        sendRequest(`${API_BASE_URL}/delete-user-subsudary/${key}`, 'get')
});

const subsidaryService = {
    getSubsidaries,
    getSubsidaryMattrix,
    subsidaryStore,
    userSubsidary
};

export default subsidaryService;
