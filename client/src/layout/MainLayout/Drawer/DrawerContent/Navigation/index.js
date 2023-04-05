// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
// import menuItem from 'menu-items';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import pages from 'menu-items/pages';
import dashboard from 'menu-items/dashboard';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.user);
    const [menuItem, setMenuItem] = useState({
        items: [dashboard, pages.subsidaries, pages.matrix, pages.heads, pages.report, pages.users]
    });

    useEffect(() => {
        let menuItems = {};
        if (userData?.role_id == 1) {
            setMenuItem({
                items: [dashboard, pages.subsidaries, pages.matrix, pages.heads, pages.report, pages.users,pages.userSubsidary]
            });
        } else {
            setMenuItem({
                items: [dashboard, pages.report]
            });
        }
    }, [userData]);

    const navGroups = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
