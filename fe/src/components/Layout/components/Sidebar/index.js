// import classname from 'classname/bind';
// import styles from './Sidebar.module.css';
// const cx = classname.bind(styles);
import BoxItem from '../../../Commons/SidebarBoxItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faGauge,
    faPeopleRoof,
    faListCheck,
    faThumbTack,
    faBarsProgress,
    faMessage,
    faBell,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    // test active
    let active = false;
    return (
        <div className="min-w-[240px] h-screen overflow-auto bg-[#364153] py-[30px] flex justify-center sticky top-0">
            <div className="flex flex-col w-full items-center h-full justify-between">
                <div className="py-[20px] w-full">
                    <div className="flex flex-col pb-[20px] items-center">
                        <img alt="logo" src="/images/logo.png" />
                        <span className="text-xl font-bold text-white mt-[23px]">UWC</span>
                    </div>
                    <div className="w-full">
                        <Link to="/">
                            <BoxItem
                                title="Trang chủ"
                                textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                isActive={active}
                                iconComponent={<FontAwesomeIcon icon={faGauge} className="mr-[5px]" />}
                            />
                        </Link>
                        <Link to="/staff-management">
                            <BoxItem
                                title="Quản lý nhân sự"
                                textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                isActive={active}
                                iconComponent={<FontAwesomeIcon icon={faPeopleRoof} className="mr-[5px]" />}
                            />
                        </Link>
                        <Link to="/task-management">
                            <BoxItem
                                title="Quản lý nhiệm vụ"
                                textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                isActive={active}
                                iconComponent={<FontAwesomeIcon icon={faListCheck} className="mr-[5px]" />}
                            />
                        </Link>
                        <Link to="/schedule-list">
                            <BoxItem
                                title="Tạo nhiệm vụ"
                                textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                isActive={active}
                                iconComponent={<FontAwesomeIcon icon={faThumbTack} className="mr-[5px]" />}
                            />
                        </Link>
                        <Link to="/vehicle-management">
                            <BoxItem
                                title="Quản lý phương tiện"
                                textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                isActive={active}
                                iconComponent={<FontAwesomeIcon icon={faBarsProgress} className="mr-[5px]" />}
                            />
                        </Link>
                        <BoxItem
                            title="Tin nhắn"
                            textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                            isActive={active}
                            numberNotifications="14"
                            iconComponent={<FontAwesomeIcon icon={faMessage} className="mr-[5px]" />}
                        />
                        <BoxItem
                            title="Thông báo"
                            textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                            isActive={active}
                            iconComponent={<FontAwesomeIcon icon={faBell} className="mr-[5px]" />}
                        />
                        <BoxItem
                            title="Cài đặt"
                            textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                            isActive={active}
                            iconComponent={<FontAwesomeIcon icon={faGear} className="mr-[5px]" />}
                        />
                    </div>
                </div>
                {/* <div className="mx-[30px] mt-[50px] w-[150px] h-[100px] bg-[#1A202C] bg-opacity-20 rounded-lg">
                    <img alt="illustration" src="/images/Illustration.png" />
                </div> */}
                <div className="flex justify-center justify-self-end items-center mt-[50px] w-full px-[10px]">
                    <img className="w-[45px] h-[45px] rounded-lg" alt="avatar" src="/images/fake-avatar.png" />
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex flex-col justify-center text-sm flex-1 ml-[20px]">
                            <span className="text-white">Back Officer</span>
                            <span className="text-[#99B2C6]">Free Account</span>
                        </div>
                        <FontAwesomeIcon icon={faRightFromBracket} className="text-white text-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
