//Layout
import { HeaderOnly } from '~/components/Layout';
// Public Routes
import Home from '~/pages/Home';
import Following from '~/pages/Follwing';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import routesConfig from '~/config/routes';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.frofile, component: Profile },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
