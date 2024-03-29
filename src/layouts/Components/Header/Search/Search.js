import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import style from './Search.module.scss';
import AccountsIteam from '~/components/AccountIteams/';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoanding] = useState(false);
    const [blurInput, setBlurInput] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fethApi = async () => {
            setLoanding(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoanding(false);
        };
        fethApi();
    }, [debouncedValue]);
    const hanldeClearInput = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setBlurInput(false);
    };
    const hanldeChangInput = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context

        <div>
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
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
