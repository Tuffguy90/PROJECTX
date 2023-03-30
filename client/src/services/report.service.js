import axios from 'axios';
const env = process.env;
const API_BASE_URL = env.REACT_APP_API_BASE_URL;
import { authHeader } from '../helpers';
import sendRequest from './common/send.request';
import CustomStore from '../../node_modules/devextreme/data/custom_store';

const reportStore = (financial_year = 2023, subsidary_id = 1) =>
    new CustomStore({
        key: 'id',
        load: () => {
            let url = `${API_BASE_URL}/get-report?financial_year=${financial_year}&subsidary_id=${subsidary_id}`;
            return sendRequest(url);
        },
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
                financial_year,
                values: val[0]
            });
        }
    });

const getMonth = (values) => {
    let val = [];
    for (var i = 0; i < 12; i++) {
        if (values[`data[${i}]`]) {
            val['month_' + i] = values[`data[${i}]`];
        }
    }
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

const getDashboardCount = async () => {
    return axios({
        url: `${API_BASE_URL}/get-dashboard-count`,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const getDashboardGraphData = async (financial_year = new Date().getFullYear(), subsidary_id = 1) => {
    return await axios({
        url: `${API_BASE_URL}/get-graph-data?financial_year=${financial_year}&subsidary_id=${subsidary_id}`,
        method: 'GET',
        headers: authHeader()
    }).catch((err) => {
        return err.response;
    });
};

const reportService = {
    reportStore,
    getMattrix,
    getDashboardCount,
    getDashboardGraphData
};

export default reportService;
