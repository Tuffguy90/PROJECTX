// project import
import dashboard from './dashboard';
import pages from './pages';

// ==============================|| MENU ITEMS ||============================== //
let menuItems = {};
// if (loginUserData?.role_id == 1) {
//     menuItems = {
//         items: [dashboard, pages.subsidaries, pages.matrix, pages.heads, pages.report, pages.users]
//     };
// } else {
//     menuItems = {
//         items: [dashboard, pages.report]
//     };
// }
menuItems = {
    items: [dashboard, pages.subsidaries, pages.matrix, pages.heads, pages.report, pages.users]
};

export default menuItems;
