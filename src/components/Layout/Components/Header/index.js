import style from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Logo"></img>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck="false"></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}>
                    <button className={cx('upload-btn')}>
                        <div>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        </div>
                        Upload
                    </button>
                    <button className={cx('login-btn')}>Log in</button>
                    <img className={cx('effect-icon')} src={images.inconEffect} alt={'Anh effect'}></img>
                    <button className={cx('setting-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
