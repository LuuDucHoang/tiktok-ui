import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import AccountsIteam from '~/components/AccountIteams';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';

const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [blurInput, setBlurInput] = useState(true);
    useEffect(() => {
        const id = setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);

        // return clearTimeout(id);
    });
    const hanldeClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setBlurInput(!blurInput);
    };
    return (
        <>
            <HeadlessTippy
                interactive={true}
                visible={blurInput && searchResult.length > 0}
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
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={handleHideResult}
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    ></input>

                    {!!searchValue && (
                        <button className={cx('clear')} onClick={hanldeClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}

                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}
                    <button className={cx('search-btn')}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
