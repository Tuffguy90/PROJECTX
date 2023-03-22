// assets
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

// const pages = {
//     id: 'authentication',
//     title: 'Authentication',
//     type: 'group',
//     children: [
//         {
//             id: 'login1',
//             title: 'Login',
//             type: 'item',
//             url: '/login',
//             icon: icons.LoginOutlined,
//             target: true
//         },
//         {
//             id: 'register1',
//             title: 'Register',
//             type: 'item',
//             url: '/register',
//             icon: icons.ProfileOutlined,
//             target: true
//         }
//     ]
// };

const subsidaries = {
    id: 'group-sub',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'subsidaries',
            title: 'Subsidary',
            type: 'item',
            url: '/subsidaries',
            icon: icons.ProfileOutlined,
            breadcrumbs: false
        }
    ]
};

const heads = {
    id: 'group-sub2',
    title: 'Navigation',
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
    id: 'group-user',
    title: 'Navigation',
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

const pages = {
    subsidaries,
    heads,
    users
};

export default pages;
