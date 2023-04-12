// project import
import dashboard from './dashboard';
import pages from './pages';

// ==============================|| MENU ITEMS ||============================== //
let menuItems = {};
menuItems = {
    items: [dashboard, pages.users, pages.subsidiaries, pages.masterSetup, pages.report]
};

export default menuItems;
