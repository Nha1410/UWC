import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
function Management() {
    return (
        <div className="w-full h-full bg-[#1A202C]">
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
                        <li className="relative left-[30px]">Trash</li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#35515b] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#2FE6A7] opacity-100">
                                        Complete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#35515b] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#2FE6A7] opacity-100">
                                        Complete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#4a455d] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#FF69B4] opacity-100">
                                        Pending
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#3a4464] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#605CFF] opacity-100">
                                        Doing
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#35515b] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#2FE6A7] opacity-100">
                                        Complete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#35515b] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#2FE6A7] opacity-100">
                                        Complete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-full h-[60px] justify-around text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] items-center">
                    <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                    <ul className="w-full flex justify-around ml-[30px] h-full items-center">
                        <li>#876123</li>
                        <li className="flex flex-row items-center">
                            <div className="flex bg-[#605cff] w-[36px] h-[36px] rounded-full ml-[5px]"></div>
                            <span className="ml-[5px]">Arrora gaur</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#605CFF]" icon={icon({ name: 'envelope' })} />
                            <span className="ml-[5px]">Short Des (hover to more detail)</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className="text-[#2FE6A7]" icon={icon({ name: 'calendar-days' })} />
                            <span className="ml-[5px]">12 Dec, 2020</span>
                        </li>
                        <li>
                            <div className="flex ">
                                <div className="w-[162px] h-[45px] bg-[#3a4464] rounded-[22px]">
                                    <span className="flex justify-center items-center h-full text-[14px] text-[#605CFF] opacity-100">
                                        Doing
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Management;
