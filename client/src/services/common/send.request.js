import axios from 'axios';
import { authHeader } from 'helpers/index';
import Toast from '../../../node_modules/devextreme-react/toast';
import Notify from 'devextreme/ui/notify';
const toastConfig = (message, type) => {
    return {
        message,
        height: 45,
        width: 500,
        minWidth: 500,
        type,
        displayTime: 2000,
        animation: {
            show: {
                type: 'fade',
                duration: 400,
                from: 0,
                to: 1
            },
            hide: { type: 'fade', duration: 40, to: 0 }
        }
    };
};

const sendRequest = (url, type = 'GET', data) => {
    return axios({
        url: url,
        data: data,
        method: type,
        headers: authHeader()
    })
        .catch((err) => {
            if (type === 'POST') {
                Notify(toastConfig('Internal Server Error', 'danger'));
            }
            return err?.message;
        })
        .then((response) => {
            if (type === 'POST' && response?.status === 200) {
                console.log('success', response);
                Notify(toastConfig('Data saved successfully', 'success'));
            } else if (type === 'POST' && response?.status === 400) {
                Notify(toastConfig('Data was not saved, validation error', 'warning'));
            }

            return response?.data;
        });
};

export default sendRequest;
