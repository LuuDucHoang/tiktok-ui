import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchServices';
import style from './Search.module.scss';
import AccountsIteam from '~/components/AccountIteams';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';
import { useDebounce } from '~/hooks';
import { faLess } from '@fortawesome/free-brands-svg-icons';
import { type } from '@testing-library/user-event/dist/type';

const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoanding] = useState(false);
    const [blurInput, setBlurInput] = useState(true);

    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fethApi = async () => {
            setLoanding(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoanding(false);
        };
        fethApi();
    }, [debounced]);
    const hanldeClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setBlurInput(false);
    };
    const hanldeChangInput = (e) => {
        if (e.target.value.startsWith(' ')) {
            setSearchValue('');
            return;
        }
        setSearchValue(e.target.value);
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
                            {searchResult.map((result) => (
                                <AccountsIteam key={result.id} data={result}></AccountsIteam>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        onFocus={() => setBlurInput(true)}
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => hanldeChangInput(e)}
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    ></input>

                    {!!searchValue && loading === false && (
                        <button className={cx('clear')} onClick={hanldeClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                    <button className={cx('search-btn')}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
