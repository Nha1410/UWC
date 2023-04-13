// import classname from 'classname/bind';
// import styles from './Sidebar.module.css';
// const cx = classname.bind(styles);
import BoxItem from '../../../Commons/SidebarBoxItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="w-1/6 h-screen bg-[#364153] py-[30px] flex justify-center items-center sticky top-0">
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center">
                    <img alt="logo" src="/images/logo.png" />
                    <span className="text-xl font-bold text-white mt-[23px]">UWC</span>
                </div>
                <div className="w-full">
                    <BoxItem
                        title="Trang chủ"
                        textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                        isActive={active}
                        iconComponent={<FontAwesomeIcon icon={faGauge} className="mr-[5px]" />}
                    />
                    <BoxItem
                        title="Quản lý nhân sư"
                        textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                        isActive={active}
                        iconComponent={<FontAwesomeIcon icon={faPeopleRoof} className="mr-[5px]" />}
                    />
                    <BoxItem
                        title="Quản lý nhiệm vụ"
                        textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                        isActive={active}
                        iconComponent={<FontAwesomeIcon icon={faListCheck} className="mr-[5px]" />}
                    />
                    <BoxItem
                        title="Tạo nhiệm vụ"
                        textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                        isActive={active}
                        iconComponent={<FontAwesomeIcon icon={faThumbTack} className="mr-[5px]" />}
                    />
                    <BoxItem
                        title="Quản lý phương tiện"
                        textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                        isActive={active}
                        iconComponent={<FontAwesomeIcon icon={faBarsProgress} className="mr-[5px]" />}
                    />
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
                <div className="mx-[30px] mt-[50px] w-[150px] h-[150px] bg-[#1A202C] bg-opacity-20 rounded-lg">
                    <img alt="illustration" src="/images/Illustration.png" />
                </div>
                <div className="flex justify-center items-center mt-[50px] w-full px-[30px]">
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
