import { useRoutes, useNavigate, useLocation } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const location = useLocation();
    const navigate = useNavigate();
    let isLoggedIn = localStorage.getItem('logged_in');
    // console.log('isLoggedIn', isLoggedIn, location.pathname);
    let beforeLoginUrls = ['/', '/forgot-password'];
    if ((isLoggedIn === undefined || isLoggedIn === null || isLoggedIn === false) && !beforeLoginUrls.includes(location.pathname)) {
        // console.log('okey', location.pathname);
        return navigate('/');
    } else {
        return useRoutes([LoginRoutes, MainRoutes]);
    }
}
