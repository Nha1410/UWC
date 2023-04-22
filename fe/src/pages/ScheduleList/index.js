import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
import { faClock, faLocationDot, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import axios from 'axios';

function ScheduleList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/api/task/fetch")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    let isSchedule = true;
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const locations = [
        { value: '1', label: 'Phuong 1 Go Vap' },
        { value: '2', label: 'Phuong 2 Go Vap' },
        { value: '3', label: 'Phuong 3 Go Vap' },
        { value: '4', label: 'Linh Trung Thu Duc' },

    ];
    const [selectedLocation, setSelectedLocation] = useState('');

    const staffs = [
        { value: '1', label: 'Nguyen Văn A' },
        { value: '2', label: 'Nguyen Văn B' },
        { value: '3', label: 'Nguyen Văn C' },
        { value: '4', label: 'Le Thanh Nhã' },

    ];
    const [selectedStaff, setSelectedStaff] = useState('');

    const vehicals = [
        { value: '1', label: 'Hazardous Trolley' },
        { value: '2', label: 'Agricultural Trolley' },
        { value: '3', label: 'Industrial Trolley' },
        { value: '4', label: 'Medical Trolley' },
    ]
    const [selectedVehicle, setSelectedVehicle] = useState('');
    const [note, setNote] = useState('');

    let formData = new FormData();
    formData.append('title', title);
    formData.append('selectedStaff', selectedStaff);
    formData.append('selectedLocation', selectedLocation);
    formData.append('selectedVehicle', selectedVehicle);
    formData.append('note', note);
    formData.append('startDate', startDate);

    const handleSubmitJanitor = async (e) => {
        console.log(note);
        e.preventDefault();
        const response = await axios.post('http://localhost:5001/api/task/store', {
            title, selectedStaff, selectedLocation, selectedVehicle, note, startDate
        }).then(this.useEffect());
        // console.log(response);
    }
    const handleSubmitCollector = async (e) => {
        console.log(note);
        e.preventDefault();
        const response = await axios.post('http://localhost:5001/api/task/store', {
            title, selectedStaff, selectedLocation, selectedVehicle, note, startDate
        });
        // console.log(response);
    }
    return (
        <>
            <div className='flex h-full'>
                <div className="w-[25%] h-full bg-[#1A202C] pl-[30px] pt-[30px]">
                    <div className='bg-[#364153] h-[96%] rounded-[7px]'>
                        <div className='p-[20px] text-white text-[13px]  '>
                            <Calendar className={`border border-white p-[10px] rounded-[7px]`} />
                        </div>
                        <div className='pt-[10px] p-[20px]'>
                            <h3 className='text-white pb-[15px]'>Collector Status</h3>
                            <div className='px-[20px] bg-[#1A202C] rounded-[7px] h-[50px] flex items-center justify-around'>
                                <input className="text-[16px] font-normal text-white ml-[20px] rounded bg-transperent" style={{ backGround: "transparent" }} type='text' placeholder='Search' />
                                <FontAwesomeIcon
                                    className="ml-[20px] text-white opacity-50"
                                    icon={icon({ name: 'magnifying-glass' })}
                                />
                            </div>
                            <div className='pt-[30px] flex items-center gap-[10px]'>
                                <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]">
                                    <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                                </div>
                                <div className='flex flex-col w-[160px] text-white'>
                                    <span>Nguyễn Văn Vuong</span>
                                    <span>Availble</span>
                                </div>
                                <div className='w-[15px] h-[15px] ml-[20px] rounded bg-[#2FE5A7]'></div>
                            </div>
                            <div className='pt-[10px] flex items-center gap-[10px]'>
                                <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]">
                                    <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                                </div>
                                <div className='flex flex-col w-[160px] text-white'>
                                    <span>Le Thanh Nha</span>
                                    <span>Availble</span>
                                </div>
                                <div className='w-[15px] h-[15px] ml-[20px] rounded bg-[#2FE5A7]'></div>
                            </div>
                        </div>
                        <div className='pt-[10px] p-[20px]'>
                            <h3 className='text-white pb-[15px]'>Janitor Status</h3>
                            <div className='px-[20px] bg-[#1A202C] rounded-[7px] h-[50px] flex items-center justify-around'>
                                <input className="text-[16px] font-normal text-white ml-[20px] rounded bg-transperent" style={{ backGround: "transparent" }} type='text' placeholder='Search' />
                                <FontAwesomeIcon
                                    className="ml-[20px] text-white opacity-50"
                                    icon={icon({ name: 'magnifying-glass' })}
                                />
                            </div>
                            <div className='pt-[30px] flex items-center gap-[10px]'>
                                <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]">
                                    <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                                </div>
                                <div className='flex flex-col w-[160px] text-white'>
                                    <span>Nguyễn Nhat Truong</span>
                                    <span>Availble</span>
                                </div>
                                <div className='w-[15px] h-[15px] ml-[20px] rounded bg-[#2FE5A7]'></div>
                            </div>
                            <div className='pt-[10px] flex items-center gap-[10px]'>
                                <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]">
                                    <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                                </div>
                                <div className='flex flex-col w-[160px] text-white'>
                                    <span>Nguyễn Tien Phat</span>
                                    <span>Availble</span>
                                </div>
                                <div className='w-[15px] h-[15px] ml-[20px] rounded bg-[#2FE5A7]'></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-[75%] h-full bg-[#1A202C] pb-[30px]">
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
                                            <div className="rounded-[10px] opacity-60 w-[100%] px-2 h-[42px] text-white bg-[#1A202C] ">
                                                <input
                                                    placeholder="Tiêu đề"
                                                    className="rounded-[10px] w-[100%] h-[42px] px-2 py-1 bg-[#1A202C] "
                                                    type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
                                                ></input>
                                            </div>
                                            <div className="flex justify-start gap-[1rem]">
                                                <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                                                <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-0 text-[#FF69B4]"
                                                        icon={faClock}
                                                    ></FontAwesomeIcon>
                                                </p>
                                                <div className="max-w-[80%]">
                                                    <p className="text-[12px]">
                                                        <button className="text-[#FF69B4]" selected={startDate} onChange={(date) => setStartDate(date)} >Change time</button>
                                                        <DatePicker selected={startDate} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                {/* <button >
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                                        icon={faLocationDot}
                                                    ></FontAwesomeIcon> */}

                                                <Select className=" justify-center rounded-[10px] h-[40px] w-[45%] items-center  text-black"
                                                    defaultValue={selectedLocation}
                                                    onChange={setSelectedLocation}
                                                    options={locations}
                                                    placeholder='Choose location'
                                                />
                                                {/* </button> */}
                                                {/* <button className="flex justify-center bg-[#605CFF] rounded-[10px] h-[40px] items-center w-[45%] ">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                                        icon={faUsers}
                                                    ></FontAwesomeIcon>
                                                    Nhân viên
                                                </button> */}
                                                <Select className=" justify-center rounded-[10px] h-[40px] w-[45%] items-center  text-black"
                                                    defaultValue={selectedStaff}
                                                    onChange={setSelectedStaff}
                                                    options={staffs}
                                                    value={staffs.value}
                                                    placeholder='Choose Staff'
                                                />
                                            </div>
                                            <Select className="w-[100%] justify-center bg-transperent rounded-[10px] h-[40px] items-center text-black"
                                                defaultValue={selectedVehicle}
                                                onChange={setSelectedVehicle}
                                                options={vehicals}
                                                value={selectedVehicle}
                                                placeholder='Choose Vehical'
                                            />
                                            {/* <button className="w-[100%] flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center gap-[0.5rem]">
                                                Phương tiện
                                            </button> */}
                                            <div className="flex justify-start gap-[1rem]">
                                                <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                                                <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-0 text-[#FF69B4]"
                                                        icon={faCalendarDays}
                                                    ></FontAwesomeIcon>
                                                </p>
                                                <div className="w-[350px] rounded-[10px] h-[42px] px-2 bg-[#1A202C] ">
                                                    <input
                                                        placeholder="Thêm mô tả công việc"
                                                        className="rounded-[10px] opacity-70 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]"
                                                        name='note' type="text"
                                                        value={note} onChange={(e) => setNote(e.target.value)}
                                                    ></input>
                                                    {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-end gap-[1rem]">
                                                <button className="flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]">
                                                    Clear
                                                </button>
                                                <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]"
                                                    type='submit' onClick={handleSubmitJanitor}>
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
                                            <div className='rounded-[10px] opacity-60 w-[100%] px-2 h-[42px] text-white bg-[#1A202C]'>
                                                <input
                                                    placeholder="Tiêu đề"
                                                    className="rounded-[10px] w-[100%] h-[42px] px-2 py-1 bg-[#1A202C] "
                                                    type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
                                                />
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
                                                    <p className="text-[12px]">
                                                        <button className="text-[#FF69B4]">Change time</button>
                                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                {/* <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                                        icon={faLocationDot}
                                                    ></FontAwesomeIcon>
                                                    Địa điểm
                                                </button> */}
                                                <Select className=" justify-center rounded-[10px] h-[40px] w-[45%] items-center  text-black"
                                                    defaultValue={selectedLocation}
                                                    onChange={setSelectedLocation}
                                                    options={locations}
                                                    placeholder='Choose location'
                                                />

                                                {/* <button className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 z-10 text-white"
                                                        icon={faUsers}
                                                    ></FontAwesomeIcon>
                                                    Người vận chuyển
                                                </button> */}
                                                <Select className=" justify-center rounded-[10px] h-[40px] w-[45%] items-center  text-black"
                                                    defaultValue={selectedStaff}
                                                    onChange={setSelectedStaff}
                                                    options={staffs}
                                                    value={staffs.value}
                                                    placeholder='Choose Staff'
                                                />

                                            </div>
                                            <button className="w-[100%] flex justify-center rounded-[10px] h-[40px] items-center gap-[0.5rem]">
                                                <Select className="w-[100%] justify-center bg-transperent rounded-[10px] h-[40px] items-center text-black"
                                                    defaultValue={selectedVehicle}
                                                    onChange={setSelectedVehicle}
                                                    options={vehicals}
                                                    value={selectedVehicle}
                                                    placeholder='Choose Vehical'
                                                />
                                            </button>
                                            <div className="flex justify-start gap-[1rem]">
                                                <p className="flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20"></p>
                                                <p className="min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]">
                                                    <FontAwesomeIcon
                                                        className="h-[16px] w-[16px] opacity-100 text-[#FF69B4]"
                                                        icon={faCalendarDays}
                                                    ></FontAwesomeIcon>
                                                </p>
                                                <div className="w-[350px]">
                                                    <input
                                                        placeholder="Thêm mô tả công việc"
                                                        className="rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]"
                                                        name='note' type="text"
                                                        value={note} onChange={(e) => setNote(e.target.value)}
                                                    ></input>
                                                    {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-end gap-[1rem]">
                                                <button className="flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]">
                                                    Clear
                                                </button>
                                                <button type='submit' onClick={handleSubmitCollector}
                                                    className="flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]">
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
                        <div className="flex flex-row w-full text-white opacity-70 text-[12px] font-light items-center">
                            <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                            <ul className="w-full flex justify-around">
                                <li>Task title</li>
                                <li className="relative right-[60px]">Vehical</li>
                                <li className="relative right-[50px]">Time</li>
                                <li>Date</li>
                                <li className="relative left-[30px]">Staff</li>
                                <li className="relative left-[30px]">
                                    <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                                </li>
                            </ul>
                        </div>
                        {data.map(item => (

                            <TaskRowItem
                                isSchedule={isSchedule}
                                id={item.title}
                                date={new Date(item.time).toLocaleDateString()}
                                time={new Date(item.time).toLocaleTimeString()}
                                bgColor="#3a4464"
                                textColor="#605CFF"
                                textContent={item.location_id}
                                vehicle={item.vehicle_id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduleList;
