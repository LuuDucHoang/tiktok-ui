import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import style from './Search.module.scss';
import AccountsIteam from '~/components/AccountIteams';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);
function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoanding] = useState(false);
    const [blurInput, setBlurInput] = useState(true);

    const debounced = useDebounce(searchValue, 1000);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoanding(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURI(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoanding(false);
            })
            .catch(() => {
                setLoanding(false);
            });
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
