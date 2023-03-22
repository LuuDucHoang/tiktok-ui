import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountsIteam.module.scss';
const cx = classNames.bind(styles);
function AccountsIteam() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/329891629_875351290359894_2599557855963841445_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MVvHPjQ0nDYAX-WsojD&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD7hQeocFowNN29B6XhYQH-RGfG5gal4QGWZPmMLFAkMw&oe=6420CBF8"
                alt="Bee"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Sieu Nhan bee</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>sieunhanbee</span>
            </div>
        </div>
    );
}

export default AccountsIteam;
