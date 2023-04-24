import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

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
    vehicle,
    position = 'default desciption',
}) {

    const [dropdown, toggle] = useState(false);

    const dropDown = () => {
        toggle(!dropdown);
    }

    return (
        <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
            <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
            <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                <li>#{id}</li>
                <li>{isSchedule && 'Garbage Trucks'}</li>
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
                        {isSchedule && date}
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
                <li>
                    <button onClick={dropDown}>
                        <FontAwesomeIcon icon={icon({ name: 'ellipsis' })} />
                    </button>
                    {
                        dropdown ?
                            <ul className='absolute ml-[-30px] flex flex-col gap-[5px]'>
                                <li><button className='w-[90px] h-[27px] flex gap-[10px] items-center bg-[#605CFF] rounded-[5px] px-[5px]'><FontAwesomeIcon className='text-[10px]' icon={icon({ name: 'pen' })} />Edit</button></li>
                                <li><button className='w-[90px] h-[27px] flex gap-[10px] items-center bg-[#FF69B4] rounded-[5px] px-[5px]'><FontAwesomeIcon className='text-[10px]' icon={icon({ name: 'trash' })} />Delete</button></li>
                            </ul>
                            : ''
                    }
                </li>
            </ul>
        </div>
    );
}
export default TaskRowItem;
