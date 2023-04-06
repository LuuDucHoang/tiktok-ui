//Layout
import { HeaderOnly } from '~/layouts';
// Public Routes
import Home from '~/pages/Home';
import Following from '~/pages/Follwing';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config/';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.frofile, component: Profile },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
