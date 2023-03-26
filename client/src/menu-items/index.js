// project import
import dashboard from './dashboard';
import pages from './pages';
const loginUserData = JSON.parse(localStorage.getItem('_userData'));

// ==============================|| MENU ITEMS ||============================== //
let menuItems = [];
if (loginUserData?.role_id == 1) {
    menuItems = {
        items: [dashboard, pages.subsidaries, pages.heads, pages.report, pages.users, pages.matrix]
    };
} else {
    menuItems = {
        items: [dashboard, pages.report]
    };
}

export default menuItems;
