//Layout
import { HeaderOnly } from '~/components/Layout';

// Public Routes
import Home from '~/pages/Home';
import Following from '~/pages/Follwing';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
