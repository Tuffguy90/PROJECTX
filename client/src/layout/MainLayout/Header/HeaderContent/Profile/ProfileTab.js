import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { LogoutOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index, type) => {
        setSelectedIndex(index);
        navigate(`${type}`);
    };

    return (
        <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1, '/change-password')}>
                <ListItemIcon>
                    <FormOutlined />
                </ListItemIcon>
                <ListItemText primary="Change Password" />
            </ListItemButton>
            {/* <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1, '/change-password')}>
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton> */}
            <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </List>
    );
};

ProfileTab.propTypes = {
    handleLogout: PropTypes.func
};

export default ProfileTab;
