import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const location = useLocation();
    const navigate = useNavigate();
    let tokenValue = localStorage.getItem('_token');
    let beforeLoginUrls = ['/', '/forgot-password'];
    useEffect(() => {
        if ((tokenValue === null || tokenValue === false) && !beforeLoginUrls.includes(location.pathname)) {
            return navigate('/');
        }
    }, [tokenValue, location.pathname]);
    return useRoutes([LoginRoutes, MainRoutes]);
}
