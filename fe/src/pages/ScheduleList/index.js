import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
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
                            <span className="ml-[8px]">Create Task for Janitor</span>
                        </div>
                        <div className="flex flex-row w-[215px] h-[40px] bg-[#605CFF] border rounded-[8px] text-white justify-center items-center">
                            <FontAwesomeIcon icon={icon({ name: 'plus' })} />
                            <span className="ml-[8px]">Create Task for Collector</span>
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
