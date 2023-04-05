import PropTypes from 'prop-types';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/layouts/Components/Header';
import Sidebar from './Sidebar';
import Video from './video';
const cx = classNames.bind(style);
const fakeApi = {
    name: 'Beee',
    avt: 'https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/44377784_930031580540379_5363393367826759680_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=o7lIBafWRNEAX_UaLD5&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCvbTXgeY8mp1sne20HTvDxz3XAa-yx3O76w2BUKIEuSw&oe=645495D0',
};

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
