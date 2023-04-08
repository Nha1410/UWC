import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
function VehicalManagement() {
    let isVehicle = true;
    return (
        <div className="w-full h-full bg-[#1A202C] pb-[30px]">
            <div className="pt-[35px]">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white ml-[30px] font-semibold text-[22px]">Danh sách nhân viên</h2>
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
                        <li>Vehical ID</li>
                        <li className="relative right-[30px]">Type</li>
                        <li className="relative left-[30px]">Use for</li>
                        <li>Location</li>
                        <li className="relative left-[30px]">Status</li>
                        <li className="relative left-[30px]">
                            <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                        </li>
                    </ul>
                </div>
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Garbage Trucks"
                    id="1"
                    bgColor="#35515b"
                    textColor="#2FE6A7"
                    textContent="Availabel"
                    useFor="Collector"
                    location="Phuong 1"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Roll-off Trucks"
                    id="2"
                    bgColor="#4a455d"
                    textColor="#FF69B4"
                    textContent="Not availabel"
                    useFor="Collector"
                    location="Phuong 2"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Rear Load Trucks"
                    id="3"
                    bgColor="#35515b"
                    textColor="#2FE6A7"
                    textContent="Availabel"
                    useFor="Collector"
                    location="Phuong 3"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Side Load Trucks"
                    id="4"
                    bgColor="#4a455d"
                    textColor="#FF69B4"
                    textContent="Not availabel"
                    useFor="Collector"
                    location="Phuong 4"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Hazardous Trolley"
                    id="5"
                    bgColor="#35515b"
                    textColor="#2FE6A7"
                    textContent="Availabel"
                    useFor="Janitor"
                    location="Phuong 5"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Agricultural Trolley"
                    id="6"
                    bgColor="#4a455d"
                    textColor="#FF69B4"
                    textContent="Not availabel"
                    useFor="Janitor"
                    location="Phuong 6"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Industrial Trolley"
                    id="7"
                    bgColor="#35515b"
                    textColor="#2FE6A7"
                    textContent="Availabel"
                    useFor="Janitor"
                    location="Phuong 7"
                />
                <TaskRowItem
                    isVehicle={isVehicle}
                    name="Medical Trolley"
                    id="8"
                    bgColor="#4a455d"
                    textColor="#FF69B4"
                    textContent="Not availabel"
                    phone="0913121234"
                    useFor="Janitor"
                    location="Phuong 8"
                />
            </div>
        </div>
    );
}

export default VehicalManagement;
