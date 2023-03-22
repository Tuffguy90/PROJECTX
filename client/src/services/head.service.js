import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const headMasterStore = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-heads`),
    insert: (values) => sendRequest(`${API_BASE_URL}/create-head`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/create-head`, 'POST', {
            key,
            values: values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const getMattrix = async () => {
    return axios({
        url: `${API_BASE_URL}/get-mattrix`,
        method: 'GET',
        headers: authHeader()
    })
        .catch((err) => {
            return err.message;
        })
        .then((response) => response?.data);
};

const headService = {
    headMasterStore,
    getMattrix
};

export default headService;
