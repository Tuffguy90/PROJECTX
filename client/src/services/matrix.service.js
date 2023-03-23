import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const matrixStore = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-mattrix`),
    insert: (values) => sendRequest(`${API_BASE_URL}/create-matrix`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/create-matrix`, 'POST', {
            key,
            values: values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const subMatStore = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-subsidary-mattrix`),
    insert: (values) => sendRequest(`${API_BASE_URL}/map-subsidary-mattrix`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/map-subsidary-mattrix`, 'POST', {
            key,
            values: values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const matrixService = {
    matrixStore,
    subMatStore
};

export default matrixService;
