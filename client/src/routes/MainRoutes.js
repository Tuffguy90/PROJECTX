import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Subsidary } from 'pages/subsidary/index';
import { HeadMaster } from 'pages/heads/index';
import { MatrixMaster } from 'pages/matrix/index';
import CreateUser from 'pages/user/CreateUser';
import { Report } from 'pages/report/index';
import Protected from './Protected';
import { UserSubsidary } from 'pages/user/UserSubsidary';
import { ChildSubsidiary } from 'pages/subsidary/ChildSubsidiary';
// import { RoleMaster } from 'pages/roles/index';
import SubsidiaryMatrixMap from 'pages/subsidaryMatrixMap';

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
            path: '/subsidiaries',
            element: (
                <Protected isSuper={true}>
                    <Subsidary />
                </Protected>
            )
        },
        {
            path: '/child-subsidiaries',
            element: (
                <Protected isSuper={true}>
                    <ChildSubsidiary />
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
        },
        {
            path: '/user-sub',
            element: (
                <Protected>
                    <UserSubsidary isSuper={true} />
                </Protected>
            )
        },
        // {
        //     path: '/sub-matrix',
        //     element: (
        //         <Protected isSuper={true}>
        //             <SubsidiaryMatrixMap />
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
