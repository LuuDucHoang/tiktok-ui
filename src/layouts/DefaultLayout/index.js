import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/Components/Header';
import Sidebar from './Sidebar';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('Container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
