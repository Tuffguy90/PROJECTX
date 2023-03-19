import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const Auth = Loadable(lazy(() => import('pages/auth/index')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '',
            element: <Auth type="login" title="Login" desc="" />
        },
        {
            path: 'forgot-password',
            element: <Auth type="forgot-password" title="Forgot Password" desc="" />
        }
    ]
};

export default LoginRoutes;
