import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountsIteam.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountsIteam({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname + 'Avatar'}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
AccountsIteam.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountsIteam;
