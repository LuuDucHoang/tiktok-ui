import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '~/assets/image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import AccountsIteam from '~/components/AccountIteams';
const cx = classNames.bind(style);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        const id = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        // return clearTimeout(id);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Logo"></img>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1">
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsIteam></AccountsIteam>
                                <AccountsIteam></AccountsIteam>
                                <AccountsIteam></AccountsIteam>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
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
