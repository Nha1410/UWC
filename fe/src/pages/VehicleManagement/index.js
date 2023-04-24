import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
import { Popup } from 'reactjs-popup';
import { store } from '../../services/Vehicle/store';
import { fetch } from '../../services/Vehicle/fetch';
import { useEffect, useState } from 'react';

function VehicalManagement() {
    let isVehicle = true;
    const form = {
        type: '',
        use_for: '',
        location: '',
        status: ''
    };
    const [vehicleArr, setVehicle] = useState([]);
    function getValue(e) {
        form[`${e.target.name}`] = e.target.value;
        console.log(vehicleArr);
    }
    const submitStore = async() => {
        await store(form);
    }
    const fetchVehicle = async() => {
        const vehicles = await fetch();
        setVehicle(vehicles);
    }
    useEffect(() => {
        fetchVehicle();
    },[])
    return (
        <div className="w-full h-full bg-[#1A202C] pb-[30px]">
            <div className="pt-[35px]">
                <div className="flex flex-row justify-between">
                    <h2 className="text-white ml-[30px] font-semibold text-[22px]">Danh sách phương tiện</h2>
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
                            <Popup trigger={<button className="button"> New Vehicle </button>} modal class="bg-[#364153]">
                                <div className='modal flex flex-col gap-[1.5rem] text-[14px]'>
                                    <p className='header'>Vehicle</p>
                                    <div>
                                        <input onChange={(e) => getValue(e)} placeholder='Type' name='type' className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'></input>
                                    </div>
                                    <div>
                                        <input  onChange={(e) => getValue(e)} placeholder='Use for' name='use_for' className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'></input>
                                    </div> 
                                    <div>
                                        <input onChange={(e) => getValue(e)} placeholder='Location' name='location' className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'></input>
                                    </div> 
                                    <div>
                                        <select onChange={(e) => getValue(e)} name="status" className='rounded-[10px] opacity-30 w-[100%] h-[42px] px-2 py-1 bg-[#1A202C]'>
                                            <option value=""></option>
                                            <option value="available">Available</option>
                                            <option value="not_available">Not Available</option>
                                        </select>    
                                    </div>
                                    <div className='flex flex-row justify-end gap-[1rem]'>
                                        <button className='flex justify-center border-[#605CFF] border-1 border-solid rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem] text-[#605CFF]'>
                                            Clear
                                        </button>
                                        <button onClick={submitStore} className='flex justify-center bg-[#605CFF] rounded-[10px] p-[0.3rem] h-[40px] items-center w-[25%] gap-[0.5rem]'>
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
                {
                    vehicleArr.map((item, i) => (
                        <TaskRowItem
                            isVehicle={isVehicle}
                            name={item.type}
                            id={item.id}
                            bgColor="#35515b"
                            textColor="#2FE6A7"
                            textContent={item.status}
                            useFor={item.use_for}
                            location={item.location}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default VehicalManagement;
