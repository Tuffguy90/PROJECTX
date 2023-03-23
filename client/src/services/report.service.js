import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const reportStore = new CustomStore({
    key: 'id',
    load: () => sendRequest(`${API_BASE_URL}/get-report`),
    update: (key, values) => {
        var val = [];
        for (var i = 0; i < 12; i++) {
            if (values[`data[${i}]`]) {
                val.push({
                    month_id: i,
                    month_value: values[`data[${i}]`]['month_value']
                });
            }
        }
        sendRequest(`${API_BASE_URL}/update-report`, 'POST', {
            key,
            values: val[0]
        });
    }
});

const getMonth = (values) => {
    let val = [];
    for (var i = 0; i < 12; i++) {
        if (values[`data[${i}]`]) {
            console.log('atch', values[`data[${i}]`]);
            val['month_' + i] = values[`data[${i}]`];
        }
    }
    console.log('val', val);
    return val;
};

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

const reportService = {
    reportStore,
    getMattrix
};

export default reportService;
