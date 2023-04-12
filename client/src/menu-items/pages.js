// assets
import { LoginOutlined, CopyOutlined, ProfileOutlined, UserOutlined, FileExcelOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined,
    FileExcelOutlined,
    UsergroupAddOutlined,
    CopyOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const subsidiaries = {
    id: 'group-sub',
    title: 'Subsidiary',
    type: 'group',
    children: [
        {
            id: 'subsidiaries',
            title: 'Subsidiary',
            type: 'item',
            url: '/subsidiaries',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        },
        {
            id: 'child-subsidiaries',
            title: 'Units',
            type: 'item',
            url: '/child-subsidiaries',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const masterSetup = {
    id: 'group-sub2',
    title: 'Master Setup',
    type: 'group',
    children: [
        {
            id: 'heads',
            title: 'Heads Master',
            type: 'item',
            url: '/heads',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        },
        {
            id: 'matrix',
            title: 'Matrix Master',
            type: 'item',
            url: '/matrix',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
        // {
        //     id: 'subMat',
        //     title: 'Matrix Mapping',
        //     type: 'item',
        //     url: '/sub-matrix',
        //     icon: icons.ProfileOutlined,
        //     breadcrumbs: false
        // }
    ]
};

const users = {
    id: 'group-sub3',
    title: 'User',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'User List',
            type: 'item',
            url: '/user',
            icon: icons.UserOutlined,
            breadcrumbs: false
        },
        {
            id: 'userSub',
            title: 'Subsidiary Mappings',
            type: 'item',
            url: '/user-sub',
            icon: icons.CopyOutlined,
            breadcrumbs: false
        }
    ]
};

const report = {
    id: 'group-sub4',
    title: 'Report',
    type: 'group',
    children: [
        {
            id: 'report',
            title: 'Report',
            type: 'item',
            url: '/report',
            icon: icons.FileExcelOutlined,
            breadcrumbs: false
        }
    ]
};

// const role = {
//     id: 'group-role',
//     title: 'Navigation',
//     type: 'group',
//     children: [
//         {
//             id: 'role',
//             title: 'Role Master',
//             type: 'item',
//             url: '/role',
//             icon: icons.UsergroupAddOutlined,
//             breadcrumbs: false
//         }
//     ]
// };

const pages = {
    users,
    subsidiaries,
    masterSetup,
    report
};

export default pages;
