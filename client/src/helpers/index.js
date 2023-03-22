const Swal = require('sweetalert2');
const withReactContent = require('sweetalert2-react-content');
const MySwal = withReactContent(Swal);

const sweetAlertBox = (title = null, textMsg = null, icon = null) => {
    return MySwal.fire({
        icon: icon !== null ? icon : 'success',
        title: title !== null ? title : 'Success',
        text: textMsg !== null ? textMsg : 'Changes Done',
        customClass: {
            confirmButton: `btn-btn-${icon !== null ? icon : 'success'}`
        }
    });
};

const authHeader = () => {
    const accessToken = localStorage.getItem('_token');
    if (accessToken) {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'Access-Control-Allow-Origin': '*'
        };
    } else {
        return {};
    }
};

export { authHeader, sweetAlertBox };
