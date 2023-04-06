import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItems from './MenuItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(style);
const defaultFn = () => {};
function Menu({ children, hideonclick = false, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([
        {
            data: items,
        },
    ]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pev) => [...pev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItems>
            );
        });
    };
    const hanldeBack = () => {
        setHistory((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1">
            <PopperWrapper className={cx('menu-poper')}>
                {history.length > 1 && <Header title={current.title} onBack={hanldeBack}></Header>}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetToFirstMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            hideOnClick={hideonclick}
            interactive={true}
            offset={[12, 8]}
            delay={[0, 700]}
            placement="bottom-end"
            onHide={handleResetToFirstMenu}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    hideonclick: PropTypes.bool,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
