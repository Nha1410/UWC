import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import TaskRowItem from '../../components/Commons/TaskRowItem';
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { useState } from 'react';
import React from 'react'
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

function RouteManagement() {

    const containerStyle = {
        width: '80%',
        height: '80%'
    };
    const pathCoordinates = [
        { lat: 10.875905513200667, lng: 106.81061307518222 },
        { lat: 10.892025350418454, lng: 106.82262937145988 }
    ];
    const center = {
        lat: 10.879828615274198, lng: 106.80623261803368
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCGDo0SsA3j9zWoEytquoCt3m9sI9AWoUk"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const [showElement, setShowElement] = useState(false);
    const showRoute = async (e) => {
        setShowElement(true);
    }
    const closeRoute = async (e) => {
        setShowElement(false);
    }

    const [location, setLoaction] = useState('');
    const [description, setDescription] = useState('');
    const [beginX, setBeginX] = useState('');
    const [beginY, setBeginY] = useState('');
    const [endX, setEndX] = useState('');
    const [endY, setEndY] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //     const data = {
        //         location: location,
        //         description: description,
        //         beginX: beginX,
        //         beginY: beginY,
        //         endX: endX,
        //         endY: endY,
        //     };
        //     const response = await axios.post('http://localhost:5001/api/location/store', data);
    }
    const myStyle = {
        backgroundColor: 'white',
        fontSize: '14px',
        opacity: '80%',
    }

    let isTask = true;
    return isLoaded ? (
        <>
            {showElement &&
                <div className='flex w-full h-full justify-center'>
                    <button onClick={(e) => closeRoute()}> close route</button>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={14}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <Marker
                            position={{ lat: 10.879828615274198, lng: 106.80623261803368 }}
                        />
                        <Polyline
                            path={pathCoordinates}
                            geodesic={true}
                            options={{
                                strokeColor: "#ff2527",
                                strokeOpacity: 0.75,
                                strokeWeight: 2,
                                icons: [
                                    {
                                        offset: "0",
                                        repeat: "20px"
                                    }
                                ]
                            }}
                        />
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </div>
            }
            <div className="w-full h-full bg-[#1A202C] pb-[30px]">
                <div className="pt-[35px]">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-white ml-[30px] font-semibold text-[22px]">Danh sách Route</h2>
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
                                <Popup trigger={<button className="ml-[8px]">Add New</button>} modal>
                                    <div className="modal flex flex-col gap-[1.5rem] text-[14px]">
                                        <p className="header">Create New Staff</p>
                                        <form className='' onSubmit={handleSubmit}>
                                            <div className='flex flex-col w-full justify-left gap-[20px] pb-[30px]'>
                                                <label className='w-[100%] flex flex-row items-center'>
                                                    <span className='w-[20%]'> Location: </span>
                                                    <input className='w-[75%] h-[30px] rounded p-[5px] text-[#000]'
                                                        style={myStyle}
                                                        onChange={(e) => setLoaction(e.target.value)}
                                                        type="text" name="location"
                                                    />
                                                </label>
                                                <label className='w-[100%] flex flex-row items-center'>
                                                    <span className='w-[20%]'> Description: </span>
                                                    <input className='w-[75%] h-[30px] rounded p-[5px] text-[#000]'
                                                        style={myStyle}
                                                        type="text" name="description"
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    />
                                                </label>
                                                <label className='w-[100%] flex flex-row items-center'>
                                                    <span className='w-[20%]'> MCP X: </span>
                                                    <input className='w-[30%] h-[30px] rounded p-[5px] text-[#000]' style={myStyle} onChange={(e) => setBeginX(e.target.value)} type="text" name="beginX" />
                                                    <span className='ml-[12px]'> MCP Y: </span>
                                                    <input className='w-[30%] h-[30px] rounded p-[5px] text-[#000]' style={myStyle} onChange={(e) => setBeginY(e.target.value)} type="text" name="beginY" />
                                                </label>
                                                <label className='w-[100%] flex flex-row items-center'>
                                                    <span className='w-[20%]'> MCP X: </span>
                                                    <input className='w-[30%] h-[30px] rounded p-[5px] text-[#000]' style={myStyle} onChange={(e) => setEndX(e.target.value)} type="text" name="endX" />
                                                    <span className='ml-[12px]'> MCP Y: </span>
                                                    <input className='w-[30%] h-[30px] rounded p-[5px] text-[#000]' style={myStyle} onChange={(e) => setEndY(e.target.value)} type="text" name="endY" />
                                                </label>
                                            </div>
                                            <button type="submit" value="Submit" className="flex float-right max-w-max bg-[#FF69B4] rounded-[10px] p-[0.7rem] h-[45px] text-[16px]">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[35px] mx-[30px]">
                    <div className="flex flex-row w-full text-white opacity-70 text-[12px] font-light items-center">
                        <input type="checkbox" className="flex ml-[20px] w-[20px] h-[20px] bg-transparent" />
                        <ul className="w-[91%] flex justify-around">
                            <li>Route ID</li>
                            <li className="relative right-[0px]">Location</li>
                            <li className="relative left-[30px]">Description</li>
                            <li>Date Create</li>
                            <li className="relative left-[30px]">Status</li>
                            <li className="relative left-[30px]">
                                <FontAwesomeIcon icon={icon({ name: 'trash' })} />
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row">
                        <TaskRowItem
                            isTask={isTask}
                            name="Robert Bacins"
                            id="1"
                            textColor="#2FE6A7"
                            bgColor="#35515b"
                            textContent="Complete"
                            date="12-12-2023"

                        />
                        <button className="text-white text-[14px] font-light bg-[#364153] rounded-[10px] mt-[10px] ml-[10px] items-center" onClick={(e) => showRoute()}> show route</button>
                    </div>
                    <TaskRowItem
                        isTask={isTask}
                        name="James Mullican"
                        id="2"
                        textColor="#FF69B4"
                        bgColor="#4a455d"
                        textContent="Pending"
                        date="12-12-2023"
                    />
                </div>
            </div>
        </>
    ) : <></>

}

export default RouteManagement;
