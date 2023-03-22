import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

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
