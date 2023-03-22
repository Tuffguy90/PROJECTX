const Swal = require('sweetalert2');
const withReactContent = require('sweetalert2-react-content');
const MySwal = withReactContent(Swal);
import { Stack, Typography } from '@mui/material';
import Dot from 'components/@extended/Dot';

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

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const statuses = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

export { authHeader, sweetAlertBox, statuses, modalStyle };
