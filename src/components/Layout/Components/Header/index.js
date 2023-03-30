import Menu from '~/components/Popper/menu';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import style from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faTruckArrowRight,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import AccountsIteam from '~/components/AccountIteams';
import { MessageIcon, SearchIcon, InboxIcon } from '~/components/icons';
import Image from '~/components/Image';
const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'v',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keybroad shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        const id = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        // return clearTimeout(id);
    });
    const hanldeMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': {
                console.log(menuItem);
                break;
            }
            default:
                console.log('Bug');
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@bee',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Logo"></img>
                <HeadlessTippy
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
                            <SearchIcon></SearchIcon>
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy multiple delay={[0, 20]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon
                                        className={cx('icon-custom')}
                                        icon={faCloudArrowUp}
                                    ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 20]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('icon-custom', 'f32')}></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 20]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('icon-custom')}></InboxIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hanldeMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avtar')}
                                alt="bee"
                                fallbackImg="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/337507005_235451258897772_8525034114946282920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=e9ti0EHtXR4AX8nr7fQ&_nc_oc=AQkm_KKSELbwzeT0ZsltnUsdOUd4K8tF-xaidHkcwLhS3kKspeIuHIhWPbyDC2k1mfc-Gtr282GjFIOPMEBdS1bJ&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCo5x9lUCVo7yqP02DC4-lcZXjOG9_2etjLfSmD5eEaSw&oe=642B75D3"
                                src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/332527663_888929579046071_335559312206014863_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bfTJDB0RggEAX8zXYXH&_nc_ht=scontent.fhan3-4.fna&oh=00_AfCwXuDf7pgh4yqxMot5nACUPjKWSwF92FDBoxrAghmHpg&oe=6429EAA7"
                            ></Image>
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
