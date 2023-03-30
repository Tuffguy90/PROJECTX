import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Subsidary } from 'pages/subsidary/index';
import { HeadMaster } from 'pages/heads/index';
import { MatrixMaster } from 'pages/matrix/index';
import { SubsidaryMatrixMap } from 'pages/subsidaryMatrixMap/index';
import CreateUser from 'pages/user/CreateUser';
import { Report } from 'pages/report/index';
import Protected from './Protected';
// import { RoleMaster } from 'pages/roles/index';

// render - dashboard
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const ChangePassword = Loadable(lazy(() => import('pages/user/ChangePassword')));
const UserProfile = Loadable(lazy(() => import('pages/user/UserProfile')));

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
            element: (
                <Protected isSuper={true}>
                    <HeadMaster />
                </Protected>
            )
        },
        {
            path: '/subsidaries',
            element: (
                <Protected isSuper={true}>
                    <Subsidary />
                </Protected>
            )
        },
        {
            path: '/user',
            element: (
                <Protected isSuper={true}>
                    <CreateUser />
                </Protected>
            )
        },
        {
            path: '/report',
            element: (
                <Protected isSuper={false}>
                    <Report />
                </Protected>
            )
        },
        {
            path: '/matrix',
            element: (
                <Protected>
                    <MatrixMaster isSuper={true} />
                </Protected>
            )
        },
        {
            path: '/user-profile',
            element: <UserProfile />
        }
        // {
        //     path: '/sub-matrix',
        //     element: (
        //         <Protected isSuper={true}>
        //             <SubsidaryMatrixMap />
        //         </Protected>
        //     )
        // }
        // {
        //     path: '/role',
        //     element: <RoleMaster />
        // }
    ]
};

export default MainRoutes;
