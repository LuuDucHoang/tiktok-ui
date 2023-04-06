import PropTypes from 'prop-types';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
const cx = classNames.bind(style);
function MenuItems({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button onClick={onClick} className={classes} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItems;
