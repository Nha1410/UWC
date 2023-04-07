import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.css';

const cx = classNames.bind(styles);

function DefaultLayout({ Sidebar, children }) {
    console.log(Sidebar);
    return (
        <div>
            <div className={cx('wrapper')}>
                {Sidebar}
                <div className="content flex-1">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
