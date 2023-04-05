import classNames from 'classnames/bind';
import styles from './video.module.scss';

const cx = classNames.bind(styles);
function Video({ api }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avtar-user-video')} src={api.avt}></img>
            <div>
                <h2 className={cx('user-name')}>{}</h2>
                <p className={cx('video-decription')}></p>
                <video className={cx('video')}></video>
            </div>
        </div>
    );
}

export default Video;
