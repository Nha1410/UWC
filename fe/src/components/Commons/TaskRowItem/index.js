import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
function TaskRowItem({
    name,
    isStaff,
    isTask,
    isVehicle,
    id,
    bgColor,
    textColor,
    textContent,
    phone,
    date,
    useFor,
    location,
}) {
    return (
        <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
            <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
            <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                <li>#{id}</li>
                <li className="flex flex-row items-center w-[170px] ">
                    <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]">
                        <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                        {/* <FontAwesomeIcon className="text-white" icon={icon({ name: 'truck' })} /> */}
                    </div>
                    <span className="ml-[5px]"> {name}</span>
                </li>
                <li>
                    <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                    <span className="ml-[5px]">{isVehicle && useFor}</span>
                    <span className="ml-[5px]">{(isStaff || isTask) && 'short decription'}</span>
                </li>
                <li>
                    <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                    <span className="ml-[5px]">
                        {' '}
                        {isStaff && phone}
                        {isTask && date}
                        {isVehicle && location}
                    </span>
                </li>
                <li>
                    <div className="flex ">
                        <div className={` w-[162px] h-[45px] bg-[${bgColor}] rounded-[22px] `}>
                            <span
                                className={` flex justify-center items-center h-full text-[14px] text-[${textColor}] opacity-100 `}
                            >
                                {' '}
                                {isStaff && textContent}
                                {isTask && textContent}
                                {isVehicle && textContent}
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon icon={icon({ name: 'ellipsis' })} />
                </li>
            </ul>
        </div>
    );
}
export default TaskRowItem;