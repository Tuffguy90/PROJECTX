import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const getSubsidaries = async (list_type = 0) => {
    return axios({
        url: `${API_BASE_URL}/get-subsidiaries?list_type=${list_type}`,
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

const subsidaryStore = (list_type = 0, parent_id = 0) =>
    new CustomStore({
        key: 'id',
        load: () => sendRequest(`${API_BASE_URL}/get-subsidiaries?list_type=${list_type}&parent_id=${parent_id}`),
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

const subsidaryLookup = new CustomStore({
    key: 'id',
    loadMode: 'raw',
    load: () => sendRequest(`${API_BASE_URL}/get-subsidiaries`)
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
    remove: (key) => sendRequest(`${API_BASE_URL}/delete-user-subsudary/${key}`, 'get')
});

const getSubsidiariesList = (list_type = 0, parent_id = 0) => {
    let url = `${API_BASE_URL}/get-subsidiaries?list_type=${list_type}&parent_id=${parent_id}`;
    return axios({
        url,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const formattedSubSidaryList = async () => {
    return axios({
        url: `${API_BASE_URL}/get-formatted-subsidaries`,
        method: 'GET',
        headers: authHeader()
    })
        .catch((err) => {
            return err.message;
        })
        .then((response) => response?.data);
};

const subsidaryService = {
    getSubsidaries,
    getSubsidaryMattrix,
    subsidaryStore,
    userSubsidary,
    getSubsidiariesList,
    subsidaryLookup,
    formattedSubSidaryList
};

export default subsidaryService;
