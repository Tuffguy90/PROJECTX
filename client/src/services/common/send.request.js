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
            return err?.response;
        })
        .then((response) => {
            if (type === 'POST' && response?.status === 200) {
                console.log('success-xx', response);
                Notify(toastConfig('Data saved successfully', 'success'));
            } else if (type === 'POST' && response?.status === 400) {
                console.log('success-xx400', response);
                Notify(toastConfig('Data was not saved, validation error', 'warning'));
                const error = response?.data?.error?.details.map((e) => e.message).join(',');
                throw error;
            } else if (type === 'POST' && response?.status === 500) {
                throw 'Internal Server Error';
            }

            return response?.data;
        });
};

export default sendRequest;
