import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import classNames from 'classnames';
import styles from '~/components/Image/Image.module.scss';

function Image({ src, alt, className, fallbackImg = images.noImg, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallbackImg);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallbackImg: PropTypes.string,
};
export default forwardRef(Image);
