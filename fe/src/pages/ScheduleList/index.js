import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
import { faClock, faLocationDot, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css';
import { useState } from 'react';

function ScheduleList() {
    let isSchedule = true;

    return (
        <div className="w-full h-full bg-[#1A202C] pb-[30px]">
            <div className="pt-[35px]">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white ml-[30px] font-semibold text-[22px]">Quản lý lịch làm việc</h2>
                    <div className="gap-x-[20px] flex flex row mr-[30px]">
                        <div className="flex flex-row w-[215px] h-[40px] bg-[#605CFF] border rounded-[8px] text-white justify-center items-center">
                            <FontAwesomeIcon icon={icon({ name: 'plus' })} />
                            <Popup trigger={<button className="ml-[8px]">Create Task for Janitor</button>} modal> 
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
                        <div className="flex flex-row w-[215px] h-[40px] bg-[#605CFF] border rounded-[8px] text-white justify-center items-center">
                            <FontAwesomeIcon icon={icon({ name: 'plus' })} />
                            <Popup trigger={<button className="ml-[8px]">Create Task for Collector</button>} modal>
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
                </div>
            </div>
            <div className="pt-[35px] mx-[30px]">
                {/* <div className="flex flex-row w-full text-white opacity-70 text-[12px] font-light items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around">
                        <li>Vehical ID</li>
                        <li className="relative right-[30px]">Type</li>
                        <li className="relative left-[30px]">Use for</li>
                        <li>Location</li>
                        <li className="relative left-[30px]">Status</li>
                        <li className="relative left-[30px]">
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div> */}
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="1"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 1, Go Vap"
                    useFor="Collector"
                    location="Phuong 1"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="2"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 2, Go Vap"
                    useFor="Collector"
                    location="Phuong 2"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="3"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 1, Go Vap"
                    useFor="Collector"
                    location="Phuong 3"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="4"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 2, Go Vap"
                    useFor="Collector"
                    location="Phuong 4"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="5"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 1, Go Vap"
                    useFor="Janitor"
                    location="Phuong 5"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="6"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 2, Go Vap"
                    useFor="Janitor"
                    location="Phuong 6"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="7"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 1, Go Vap"
                    useFor="Janitor"
                    location="Phuong 7"
                />
                <TaskRowItem
                    isSchedule={isSchedule}
                    id="8"
                    date="12-12-2022"
                    time="11.30AM"
                    bgColor="#3a4464"
                    textColor="#605CFF"
                    textContent="Phuong 2, Go Vap"
                    phone="0913121234"
                    useFor="Janitor"
                    location="Phuong 8"
                />
            </div>
        </div>
    );
}

export default ScheduleList;
