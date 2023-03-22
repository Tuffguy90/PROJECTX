import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Subsidary } from 'pages/subsidary/index';
import { HeadMaster } from 'pages/heads/index';
import { Report } from 'pages/report/index';

// render - dashboard
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));

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
            path: '/subsidaries',
            element: <Subsidary />
        },
        {
            path: '/heads',
            element: <HeadMaster />
        },
        {
            path: '/report',
            element: <Report />
        }
        // {
        //     path: 'color',
        //     element: <Color />
        // },
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
