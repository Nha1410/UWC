import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css';
import { faClock, faLocationDot, faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select'

function Home() {
    // const dataTime = () => {
    //     const date = new Date();

    // }

    const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="">
            <h2>home page</h2>
            <div>
                <Popup trigger={<button className="button"> Collector Task </button>} modal class="bg-[#364153]">
                    <div className='modal flex flex-col gap-[1.5rem] text-[14px]'>
                        <p className='header'>Tạo công việc</p>
                        <button className="flex max-w-max bg-[#FF69B4] rounded-[10px] p-[0.3rem] h-[30px]">Nội dung</button>
                        <div>
                            <input placeholder='Tiêu đề' className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'></input>
                        </div>
                        <div className='flex justify-start gap-[1rem]'>
                            <p className='flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20'></p>
                            <p className='min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]' icon={faClock}></FontAwesomeIcon>
                            </p>
                            <div className='max-w-[80%]'>
                                <p className='text-[12px]'>Thursday. December 5 12:00pm - 1:00pm</p>
                                <button className='text-[#FF69B4] px-1'>Change time</button>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-white' icon={faLocationDot}></FontAwesomeIcon>
                                Địa điểm
                            </button>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-white' icon={faUsers}></FontAwesomeIcon>
                                Nhân viên</button>
                        </div>
                        <button className='w-[100%] flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center gap-[0.5rem]'>Phương tiện</button>
                        <div className='flex justify-start gap-[1rem]'>
                            <p className='flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20'></p>
                            <p className='min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]' icon={faCalendarDays}></FontAwesomeIcon>
                            </p>
                            <div className='max-w-[80%]'>
                                <p className='text-[12px]'>Thêm mô tả công việc</p>
                                {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                            </div>
                        </div>
                        <div className='flex flex-row justify-end gap-[1rem]'>
                            <button className='flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]'>
                                Clear
                            </button>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]'>
                                Save</button>
                        </div>
                    </div>
                </Popup>
            </div>
            <div>
                <Popup trigger={<button className="button"> Janitor Task </button>} modal>
                <div className='modal flex flex-col gap-[1.5rem] text-[14px]'>
                        <p className='header'>Tạo công việc</p>
                        <button className="flex max-w-max bg-[#FF69B4] rounded-[10px] p-[0.3rem] h-[30px]">Nội dung</button>
                        <div>
                            <input placeholder='Tiêu đề' className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'></input>
                        </div>
                        <div className='flex justify-start gap-[1rem]'>
                            <p className='flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20'></p>
                            <p className='min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]' icon={faClock}></FontAwesomeIcon>
                            </p>
                            <div className='max-w-[80%]'>
                                <p className='text-[12px]'>Thursday. December 5 12:00pm - 1:00pm</p>
                                <button className='text-[#FF69B4] px-1'>Change time</button>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-white' icon={faLocationDot}></FontAwesomeIcon>
                                Địa điểm
                            </button>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[45%] gap-[0.5rem]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-white' icon={faUsers}></FontAwesomeIcon>
                                Người vận chuyển</button>
                        </div>
                        <button className='w-[100%] flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center gap-[0.5rem]'>Phương tiện</button>
                        <div className='flex justify-start gap-[1rem]'>
                            <p className='flex justify-center items-center h-[40px] w-[40px] rounded-[20px] bg-[#FF69B4] opacity-20'></p>
                            <p className='min-w-[40px] absolute flex justify-center items-center h-[40px] w-[40px] rounded-[20px]'>
                                <FontAwesomeIcon className='h-[16px] w-[16px] opacity-100 z-10 text-[#FF69B4]' icon={faCalendarDays}></FontAwesomeIcon>
                            </p>
                            <div className='max-w-[80%]'>
                                <p className='text-[12px]'>Thêm mô tả công việc</p>
                                {/* <button className='text-[#FF69B4] px-1'>Change time</button> */}
                            </div>
                        </div>
                        <div className='flex flex-row justify-end gap-[1rem]'>
                            <button className='flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]'>
                                Clear
                            </button>
                            <button className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]'>
                                Save</button>
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
    );
}

export default Home;
