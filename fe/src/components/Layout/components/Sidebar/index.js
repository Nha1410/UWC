// import classname from 'classname/bind';
// import styles from './Sidebar.module.css';
// const cx = classname.bind(styles);
import BoxItem from '../../../Commons/SidebarBoxItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
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
import { useLogoutMutation } from '../../../../services/Auth/logoutApiSlice';
import jwt from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { getInfoUser } from '../../../../services/User/getInfoUser';

function Sidebar() {
    // test active
    let active = false;
    const [logout, { isLoading }] = useLogoutMutation();
    const [cookies, setCookie] = useCookies(['jwt']);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roleName, setRoleName] = useState('');
    const jwtToken = cookies.jwt;
    const jwtDecode = jwt(jwtToken);
    const role = jwtDecode.role;
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCurrentUser = async () => {
            const user = await getInfoUser(jwtDecode.id);
            setFirstName(user.firstName);
            setRoleName(user.role);
            setLastName(user.lastName);
        };
        fetchCurrentUser();
    });
    const hanldeLogout = async () => {
        try {
            await logout({ id: jwtDecode.id, jwt: jwtToken }).unwrap();
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };
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
                        <Link to="/check-in-out">
                            {role !== 1 &&
                                <BoxItem
                                    title="Check in/out"
                                    textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                    isActive={active}
                                    iconComponent={<FontAwesomeIcon icon={faGauge} className="mr-[5px]" />}
                                />
                            }
                        </Link>
                        {
                            role === 1 &&
                            <Link to={`${role !== 1 ? '#' : '/staff-management'}`}>
                                <BoxItem
                                    isEnable={role !== 1 ? false : true}
                                    title="Quản lý nhân sự"
                                    textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                    isActive={active}
                                    iconComponent={<FontAwesomeIcon icon={faPeopleRoof} className="mr-[5px]" />}
                                />
                            </Link>
                        }
                        {
                            role === 1 &&
                            <Link to={`${role !== 1 ? '#' : '/route-management'}`}>
                                <BoxItem
                                    isEnable={role !== 1 ? false : true}
                                    title="Quản lý tuyến đường"
                                    textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                    isActive={active}
                                    iconComponent={<FontAwesomeIcon icon={faListCheck} className="mr-[5px]" />}
                                />
                            </Link>
                        }
                        {
                            role === 1 &&
                            <Link to={`${role !== 1 ? '#' : '/schedule-list'}`}>
                                <BoxItem
                                    isEnable={role !== 1 ? false : true}
                                    title="Tạo nhiệm vụ"
                                    textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                    isActive={active}
                                    iconComponent={<FontAwesomeIcon icon={faThumbTack} className="mr-[5px]" />}
                                />
                            </Link>
                        }
                        {
                            role === 1 &&
                            <Link to={`${role !== 1 ? '#' : '/vehicle-management'}`}>
                                <BoxItem
                                    isEnable={role !== 1 ? false : true}
                                    title="Quản lý phương tiện"
                                    textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                                    isActive={active}
                                    iconComponent={<FontAwesomeIcon icon={faBarsProgress} className="mr-[5px]" />}
                                />
                            </Link>
                        }
                        <BoxItem
                            isEnable={role !== 1 ? false : true}
                            title="Tin nhắn"
                            textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                            isActive={active}
                            numberNotifications="14"
                            iconComponent={<FontAwesomeIcon icon={faMessage} className="mr-[5px]" />}
                        />
                        <BoxItem
                            isEnable={role !== 1 ? false : true}
                            title="Thông báo"
                            textColor={active ? 'text-[#605CFF]' : 'text-[#99B2C6]'}
                            isActive={active}
                            iconComponent={<FontAwesomeIcon icon={faBell} className="mr-[5px]" />}
                        />
                        <BoxItem
                            isEnable={role !== 1 ? false : true}
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
                            <span className="text-white">
                                {firstName} {lastName}
                            </span>
                            <span className="text-[#99B2C6]">{roleName}</span>
                        </div>
                        <FontAwesomeIcon
                            onClick={hanldeLogout}
                            icon={faRightFromBracket}
                            className="text-white text-xl p-[10px] hover:cursor-pointer hover:text-[#605CFF]"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;
