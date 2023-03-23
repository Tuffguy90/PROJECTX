import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Subsidary } from 'pages/subsidary/index';
import { HeadMaster } from 'pages/heads/index';
<<<<<<< HEAD
import { MatrixMaster } from 'pages/matrix/index';
import { SubsidaryMatrixMap } from 'pages/subsidaryMatrixMap/index';
=======
import CreateUser from 'pages/user/CreateUser';
import { Report } from 'pages/report/index';
>>>>>>> cc8c6c8b2c37493313c16c39587e3288f25dcef8

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
            path: 'user',
            element: <CreateUser />
        },
        {
            path: '/report',
            element: <Report />
        },
        {
            path: '/matrix',
            element: <MatrixMaster />
        },
        {
            path: '/sub-matrix',
            element: <SubsidaryMatrixMap />
        }
        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // },
        // {
        //     path: 'shadow',
        //     element: <Shadow />
        // },
        // {
        //     path: 'typography',
        //     element: <Typography />
        // },
        // {
        //     path: 'icons/ant',
        //     element: <AntIcons />
        // }
    ]
};

export default MainRoutes;
