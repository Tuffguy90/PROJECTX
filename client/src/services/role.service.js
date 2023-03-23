import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const roleCRUD = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-roles`),
    insert: (values) => sendRequest(`${API_BASE_URL}/create-role`, 'POST', { ...values }),
    update: (key, values) =>
        sendRequest(`${API_BASE_URL}/create-role`, 'POST', {
            key,
            values: values
        })
    // remove: (key) =>
    //     sendRequest(`${API_BASE_URL}/DeleteOrder`, 'DELETE', {
    //         key
    //     })
});

const getRoles = async () => {
    return axios({
        url: `${API_BASE_URL}/get-roles`,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const roleService = {
    roleCRUD,
    getRoles
};

export default roleService;
