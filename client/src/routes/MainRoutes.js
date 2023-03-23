import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Subsidary } from 'pages/subsidary/index';
import { HeadMaster } from 'pages/heads/index';
import CreateUser from 'pages/user/CreateUser';
import { Report } from 'pages/report/index';
import { RoleMaster } from 'pages/roles/index';

// render - dashboard
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const ChangePassword = Loadable(lazy(() => import('pages/user/ChangePassword')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/change-password',
            element: <ChangePassword />
        },
        {
            path: '/heads',
            element: <HeadMaster />
        },
        {
            path: '/subsidaries',
            element: <Subsidary />
        },
        {
            path: '/user',
            element: <CreateUser />
        },
        {
            path: '/report',
            element: <Report />
        },
        {
            path: '/role',
            element: <RoleMaster />
        }
    ]
};

export default MainRoutes;
