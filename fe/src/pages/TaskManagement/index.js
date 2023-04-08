import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
function TaskManagement() {
    let isTask = true;
    return (
        <div className="w-full h-full bg-[#1A202C] pb-[30px]">
            <div className="pt-[35px]">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white ml-[30px] font-semibold text-[22px]">Danh sách nhiệm vụ</h2>
                    <div className="gap-x-[20px] flex flex row mr-[30px]">
                        <div className="flex w-[230px] h-[40px] bg-[#364153] border rounded-[8px] justify-between items-center">
                            <div className="text-[12px] font-normal text-white opacity-50 ml-[20px]">Search</div>
                            <FontAwesomeIcon
                                className="mr-[20px] text-white opacity-50"
                                icon={icon({ name: 'magnifying-glass' })}
                            />
                        </div>
                        <div className="flex flex-row w-[122px] h-[40px] bg-[#605CFF] border rounded-[8px] text-white justify-center items-center">
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
                        <li>TaskID</li>
                        <li className="relative right-[30px]">Assign For</li>
                        <li>Description</li>
                        <li>Date</li>
                        <li className="relative left-[30px]">Status</li>
                        <li className="relative left-[30px]">
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <TaskRowItem
                    isTask={isTask}
                    name="Robert Bacins"
                    id="1"
                    textColor="#2FE6A7"
                    bgColor="#35515b"
                    textContent="Complete"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="James Mullican"
                    id="2"
                    textColor="#FF69B4"
                    bgColor="#4a455d"
                    textContent="Pending"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="Robert Bacins"
                    id="3"
                    textColor="#2FE6A7"
                    bgColor="#35515b"
                    textContent="Complete"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="James Mullican"
                    id="4"
                    textColor="#FF69B4"
                    bgColor="#4a455d"
                    textContent="Pending"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="Robert Bacins"
                    id="5"
                    textColor="#2FE6A7"
                    bgColor="#35515b"
                    textContent="Complete"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="James Mullican"
                    id="6"
                    textColor="#FF69B4"
                    bgColor="#4a455d"
                    textContent="Pending"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="Robert Bacins"
                    id="7"
                    textColor="#2FE6A7"
                    bgColor="#35515b"
                    textContent="Complete"
                    date="12-12-2023"
                />
                <TaskRowItem
                    isTask={isTask}
                    name="James Mullican"
                    id="8"
                    textColor="#FF69B4"
                    bgColor="#4a455d"
                    textContent="Pending"
                    date="12-12-2023"
                />
            </div>
        </div>
    );
}

export default TaskManagement;
