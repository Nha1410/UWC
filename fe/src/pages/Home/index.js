import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css';
import { faClock, faLocationDot, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';

import BoxContent from '../../components/Commons/DashboardBoxContent';
import BoxItem from '../../components/Commons/DashboardBoxInfor';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Commons/Button';
import { useState } from 'react';
import BoxInfo from '../../components/Commons/DashboardVehicleInfo';

function Home() {
    const [janitors, setJanitors] = useState([
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            mcp: 'MCP 1',
            area: 'District 1',
            timePerMonth: 123,
        },
        {
            id: '876368',
            name: 'Petter',
            avatar: 'in future',
            status: 0,
            mcp: null,
            area: null,
            timePerMonth: 124,
        },
        {
            id: '876412',
            name: 'Vecent',
            avatar: 'in future',
            status: 0,
            mcp: null,
            area: null,
            timePerMonth: 125,
        },
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            mcp: 'MCP 1',
            area: 'District 1',
            timePerMonth: 123,
        },
    ]);
    const [collectors, setCollectors] = useState([
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            currentVehicle: 'Truct 8',
            timePerMonth: 123,
        },
        {
            id: '876368',
            name: 'Petter',
            avatar: 'in future',
            status: 0,
            currentVehicle: null,
            timePerMonth: 124,
        },
        {
            id: '876412',
            name: 'Vecent',
            avatar: 'in future',
            status: 0,
            currentVehicle: null,
            timePerMonth: 125,
        },
    ]);
    // const dataTime = () => {
    //     const date = new Date();

    // }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className="flex flex-col justify-center items-center p-[20px] w-full h-full bg-[#1A202C]">
            <div className="w-full flex justify-between text-white items-center py-[20px]">
                <span className="font-bold text-xl">Dashboard</span>
                <div className="flex justify-center items-center">
                    <div className="w-[170px] h-[50px] bg-[#364153] rounded-lg mr-[20px] flex justify-center items-center">
                        <span>02-03-2023</span>
                        <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]" />
                    </div>
                    <div className="w-[170px] h-[50px] bg-[#364153] rounded-lg mr-[20px] flex justify-center items-center">
                        <span>05-03-2023</span>
                        <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]" />
                    </div>
                </div>
            </div>
            <div className="h-1/6 w-full flex justify-around items-center">
                <BoxItem srcIcon="/images/icon-heart.png" headerInfo="15" contentInfo="MCP đã đầy" />
                <BoxItem srcIcon="/images/icon-collector.png" headerInfo="10" contentInfo="số lượng routes" />
                <BoxItem srcIcon="/images/icon-resource.png" headerInfo="20+" contentInfo="nguồn lực" />
            </div>
            <div className="flex-1 w-full flex justify-center items-center">
                <div className="w-2/3 flex flex-col w-full pr-[20px]">
                    <div className="py-[20px]">
                        <BoxContent title="Quản lý lao công">
                            <div className="text-white w-full flex flex-col">
                                {/* header of table */}
                                <tr className="flex justify-center items-center py-[20px] border-b">
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Janitor ID{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Janitor Name{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Status{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Current Location{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Time/Month
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                </tr>
                                {/* rows of table */}
                                {janitors.map((janitor, index) => {
                                    return (
                                        <tr
                                            className={`flex justify-center items-center py-[20px] rounded-lg ${
                                                index % 2 !== 0 ? 'bg-[#1A202C]' : ''
                                            }`}
                                            key={index}
                                        >
                                            <th className="flex justify-center items-center w-1/4">
                                                <span className="w-full">#{janitor.id}</span>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <div className="flex justify-center items-center">
                                                    <img alt="avatar" src="/images/fake-avatar-janitor.png" />
                                                    <span className="w-full ml-[10px]">{janitor.name}</span>
                                                </div>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <Button
                                                    name={janitor.status ? 'Active' : 'Inactive'}
                                                    width="w-2/3"
                                                    height="h-full"
                                                    bgColor={janitor.status ? 'bg-[#5CD8FF]' : 'bg-[#FF5C7A]'}
                                                />
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <div className="flex flex-col items-center justify-center">
                                                    <span>{janitor.mcp ?? '-'}</span>
                                                    <span>{janitor.area ?? '-'}</span>
                                                </div>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <span className="w-full">{janitor.timePerMonth}</span>
                                            </th>
                                        </tr>
                                    );
                                })}
                            </div>
                        </BoxContent>
                    </div>
                    <div className="py-[20px]">
                        <BoxContent title="Quản lý người vận chuyển">
                            <div className="text-white w-full flex flex-col">
                                {/* header of table */}
                                <tr className="flex justify-center items-center py-[20px] border-b">
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Collector ID{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Collector Name{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Current Vehicle{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Current Location{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Time/Month
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                </tr>
                                {/* rows of table */}
                                {collectors.map((collector, index) => {
                                    return (
                                        <tr
                                            className={`flex justify-center items-center py-[20px] rounded-lg ${
                                                index % 2 !== 0 ? 'bg-[#1A202C]' : ''
                                            }`}
                                            key={index}
                                        >
                                            <th className="flex justify-center items-center w-1/4">
                                                <span className="w-full">#{collector.id}</span>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <div className="flex justify-center items-center">
                                                    <img alt="avatar" src="/images/fake-avatar-janitor.png" />
                                                    <span className="w-full ml-[10px]">{collector.name}</span>
                                                </div>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <Button
                                                    name={collector.status ? 'Active' : 'Inactive'}
                                                    width="w-2/3"
                                                    height="h-full"
                                                    bgColor={collector.status ? 'bg-[#5CD8FF]' : 'bg-[#FF5C7A]'}
                                                />
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <span className="">{collector.currentVehicle ?? '-'}</span>
                                            </th>
                                            <th className="flex justify-center items-center w-1/4">
                                                <span className="w-full">{collector.timePerMonth}</span>
                                            </th>
                                        </tr>
                                    );
                                })}
                            </div>
                        </BoxContent>
                    </div>
                </div>
                <div className="flex-1 pr-[20px] flex flex-col content-around h-full">
                    <div className="mt-[20px] pb-[20px]">
                        <BoxContent title="Quản lý công việc">
                            <div className="w-full h-[418px]"></div>
                        </BoxContent>
                    </div>
                    <div className="pt-[20px]">
                        <BoxContent title="Quản lý phương tiện">
                            <div className="flex justify-start border-b">
                                <BoxInfo srcImage="/images/fake-avatar-janitor.png" name="Truck 8" weight="80 ton" />
                            </div>
                            <div className="flex justify-start">
                                <BoxInfo srcImage="/images/fake-avatar.png" name="Truck 16" weight="122 ton" />
                            </div>
                        </BoxContent>
                    </div>
                </div>
            </div>
            <div>
                <Popup trigger={<button className="button"> Collector Task </button>} modal class="bg-[#364153]">
                    <div className="modal flex flex-col gap-[1.5rem] text-[14px]">
                        <p className="header">Tạo công việc</p>
                        <button className="flex max-w-max bg-[#FF69B4] rounded-[10px] p-[0.3rem] h-[30px]">
                            Nội dung
                        </button>
                        <div>
                            <input
                                placeholder="Tiêu đề"
                                className="rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]"
                            ></input>
                        </div>
                        <div className="flex justify-start gap-[1rem]">
                            <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                            <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]"
                                    icon={faClock}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="max-w-[80%]">
                                <p className="text-[12px]">Thursday. December 5 12:00pm - 1:00pm</p>
                                <button className="text-[#FF69B4] px-1">Change time</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Địa điểm
                            </button>
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Nhân viên
                            </button>
                        </div>
                        <button className="w-[100%] flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center gap-[0.5rem]">
                            Phương tiện
                        </button>
                        <div className="flex justify-start gap-[1rem]">
                            <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                            <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]"
                                    icon={faCalendarDays}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="max-w-[80%]">
                                <p className="text-[12px]">Thêm mô tả công việc</p>
                                {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                            </div>
                        </div>
                        <div className="flex flex-row justify-end gap-[1rem]">
                            <button className="flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]">
                                Clear
                            </button>
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]">
                                Save
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
            <div>
                <Popup trigger={<button className="button"> Janitor Task </button>} modal>
                    <div className="modal flex flex-col gap-[1.5rem] text-[14px]">
                        <p className="header">Tạo công việc</p>
                        <button className="flex max-w-max bg-[#FF69B4] rounded-[10px] p-[0.3rem] h-[30px]">
                            Nội dung
                        </button>
                        <div>
                            <input
                                placeholder="Tiêu đề"
                                className="rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]"
                            ></input>
                        </div>
                        <div className="flex justify-start gap-[1rem]">
                            <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                            <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]"
                                    icon={faClock}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="max-w-[80%]">
                                <p className="text-[12px]">Thursday. December 5 12:00pm - 1:00pm</p>
                                <button className="text-[#FF69B4] px-1">Change time</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                    icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Địa điểm
                            </button>
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                    icon={faUsers}
                                ></FontAwesomeIcon>
                                Người vận chuyển
                            </button>
                        </div>
                        <button className="w-[100%] flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center gap-[0.5rem]">
                            Phương tiện
                        </button>
                        <div className="flex justify-start gap-[1rem]">
                            <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                            <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                <FontAwesomeIcon
                                    className="h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]"
                                    icon={faCalendarDays}
                                ></FontAwesomeIcon>
                            </p>
                            <div className="max-w-[80%]">
                                <p className="text-[12px]">Thêm mô tả công việc</p>
                                {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                            </div>
                        </div>
                        <div className="flex flex-row justify-end gap-[1rem]">
                            <button className="flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]">
                                Clear
                            </button>
                            <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]">
                                Save
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
    );
}

export default Home;
