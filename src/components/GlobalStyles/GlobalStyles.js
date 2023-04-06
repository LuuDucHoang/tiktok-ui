import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    // return React.Children.only(children); trong trường hợp chỉ muốn return 1 children
    return children;
}
GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
