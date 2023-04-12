// assets
import { LoginOutlined, ProfileOutlined, UserOutlined, FileExcelOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined,
    FileExcelOutlined,
    UsergroupAddOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

// const subsidaries = {
//     id: 'group-sub',
//     title: 'Navigation',
//     type: 'group',
//     children: [
//         {
//             id: 'subsidiaries',
//             title: 'Subsidary',
//             type: 'item',
//             url: '/subsidiaries',
//             icon: icons.ProfileOutlined,
//             breadcrumbs: false
//         }
//     ]
// };

// const childSubsidiaries = {
//     id: 'group-child-sub',
//     title: 'Navigation',
//     type: 'group',
//     children: [
//         {
//             id: 'child-subsidiaries',
//             title: 'Child-Subsidiary',
//             type: 'item',
//             url: '/child-subsidiaries',
//             icon: icons.ProfileOutlined,
//             breadcrumbs: false
//         }
//     ]
// };

const subsidaries = {
    id: 'subsidiaries-list',
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
            title: 'Child-Subsidiary',
            type: 'item',
            url: '/child-subsidiaries',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const heads = {
    id: 'group-sub2',
    title: 'Heads',
    type: 'group',
    children: [
        {
            id: 'heads',
            title: 'Heads',
            type: 'item',
            url: '/heads',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const users = {
    id: 'group-sub3',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'User',
            type: 'item',
            url: '/user',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

const report = {
    id: 'group-sub4',
    title: 'Reports',
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

const role = {
    id: 'group-role',
    title: 'Roles',
    type: 'group',
    children: [
        {
            id: 'role',
            title: 'Role',
            type: 'item',
            url: '/role',
            icon: icons.UsergroupAddOutlined,
            breadcrumbs: false
        }
    ]
};

const matrix = {
    id: 'group-mat3',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'matrix',
            title: 'Matrix Master',
            type: 'item',
            url: '/matrix',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const subsidaryMatrixMap = {
    id: 'group-sub-mat4',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'subMat',
            title: 'Matrix Mapping',
            type: 'item',
            url: '/sub-matrix',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const userSubsidary = {
    id: 'group-sub-mat5',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'userSub',
            title: 'User Subsidiary Mappings',
            type: 'item',
            url: '/user-sub',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const pages = {
    subsidaries,
    matrix,
    heads,
    users,
    report,
    subsidaryMatrixMap,
    role,
    userSubsidary
    // childSubsidiaries
};

export default pages;
