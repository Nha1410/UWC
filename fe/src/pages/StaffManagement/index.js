import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
import { useCallback, useEffect, useState } from 'react';
import { getAllUsers } from '../../services/User/getAllUsers';
import SideBarRegister from '../../components/Layout/components/SidebarRegister';
import { PaginationNav1, PaginationNav1Presentation } from '../../components/Commons/Pagination';

function StaffManagement() {
    const itemsPerPage = 5;

    const [pageCount, setPageCount] = useState(10);
    const [pageIndex, setPageIndex] = useState(0);

    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState();
    const [isCreateUser, setIsCreateUser] = useState();
    const [usersPagination, setUsersPagination] = useState([]);

    useEffect(() => {
        const totalUsers = users.length;
        setPageCount(Math.ceil(totalUsers / itemsPerPage));
        const mark = pageIndex * itemsPerPage;
        setUsersPagination(users.slice(mark, Math.min(mark + itemsPerPage, totalUsers)));
        // console.log(mark, mark + itemsPerPage);
    }, [pageIndex, users]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await getAllUsers();
            setUsers(res.data);
            setRoles(res.roles);
        };
        fetchAllUsers();
    }, []);

    const handleOpenCreatUserMenu = () => {
        setIsCreateUser(!isCreateUser);
    };

    return (
        <div className="w-full h-full bg-[#1A202C] pb-[30px]">
            <div className={`flex-1 ${isCreateUser && 'opacity-20'}`}>
                <div className="pt-[35px]">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-white ml-[30px] font-semibold text-[22px]">Danh sách nhân viên</h2>
                        <div className="gap-x-[20px] flex flex row mr-[30px]">
                            <div className="flex w-[230px] h-[40px] bg-[#364153] border rounded-[8px] justify-between items-center">
                                <div className="text-[12px] font-normal text-white opacity-50 ml-[20px]">Search</div>
                                <FontAwesomeIcon
                                    className="mr-[20px] text-white opacity-50"
                                    icon={icon({ name: 'magnifying-glass' })}
                                />
                            </div>
                            <div
                                className="flex flex-row w-[122px] h-[40px] bg-[#605CFF] border rounded-[8px] text-white justify-center items-center hover:cursor-pointer hover:opacity-90 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150"
                                onClick={handleOpenCreatUserMenu}
                            >
                                <FontAwesomeIcon icon={icon({ name: 'plus' })} />
                                <span className="ml-[8px]">Add New</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[35px] mx-[30px]">
                    <div className="flex flex-row w-full text-white opacity-70 text-[12px] font-light items-center">
                        <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                        <ul className="w-full flex justify-around">
                            <li>Staff Id</li>
                            <li className="relative right-[30px]">Name</li>
                            <li>Position</li>
                            <li>phone</li>
                            <li className="relative left-[30px]">Status</li>
                            <li className="relative left-[30px]"></li>
                        </ul>
                    </div>
                    {usersPagination.map((user, index) => {
                        return (
                            <TaskRowItem
                                position={roles[user.role]}
                                isStaff={true}
                                src={user.avatar}
                                key={user.id}
                                name={user.firstName + user.lastName}
                                status={user.status}
                                id={user.id}
                                bgColor="#35515b"
                                textColor={`${user.status ? '#5CD8FF' : '#FF5C7A'}`}
                                textContent={`${user.status ? 'Active' : 'Inactive'}`}
                                phone={user.phone}
                            />
                        );
                    })}
                </div>
                <div className="pt-[35px] mx-[30px] flex gap-3 flex-wrap justify-end">
                    <PaginationNav1
                        gotoPage={setPageIndex}
                        canPreviousPage={pageIndex > 0}
                        canNextPage={pageIndex < pageCount - 1}
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                    />
                </div>
            </div>
            {isCreateUser && (
                <div
                    className={`min-w-[20%] h-screen overflow-auto bg-[#364153] py-[30px] top-0 right-0 fixed z-60 rounded-l-lg flex items-center justify-center ease-in-out duration-300 ${
                        isCreateUser ? 'translate-x-0 ' : 'translate-x-full'
                    }`}
                >
                    <SideBarRegister toogleMenu={handleOpenCreatUserMenu} />
                </div>
            )}
        </div>
    );
}

export default StaffManagement;
