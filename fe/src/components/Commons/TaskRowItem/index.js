import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { BACKEND_DOMAIN } from '../../../utils/api';
function TaskRowItem({
    name,
    isStaff,
    isTask,
    isVehicle,
    isSchedule,
    id,
    bgColor,
    textColor,
    textContent,
    phone,
    date,
    useFor,
    location,
    src,
    time,
    position = 'default desciption',
}) {
    return (
        <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
            <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
            <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                <li>#{id}</li>
                <li>{isSchedule && date}</li>
                <li className="flex flex-row items-center w-[170px] ">
                    <div className="flex items-center justify-center bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px] object-contain">
                        {src ? (
                            <img src={`${BACKEND_DOMAIN}avatars/${src}`} className="rounded-full w-[30px] h-[30px]" />
                        ) : (
                            <FontAwesomeIcon className="text-white" icon={icon({ name: 'user' })} />
                        )}
                    </div>
                    <span className="ml-[5px]"> {name}</span>
                    <span className="ml-[5px]"> {time}</span>
                </li>
                <li>
                    {/* <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} /> */}
                    <span className="ml-[5px]">{isVehicle && useFor}</span>
                    <span className="ml-[5px]">{(isStaff || isTask) && position}</span>
                </li>
                <li className="flex items-center justify-left">
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
                                {isSchedule && textContent}
                            </span>
                        </div>
                    </div>
                </li>
                <li className="hover:cursor-pointer hover:opacity-70 px-[5px]">
                    <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                </li>
            </ul>
        </div>
    );
}
export default TaskRowItem;
