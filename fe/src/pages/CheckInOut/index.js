import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import React from 'react'
function CheckInOut() {
    const containerStyle = {
        width: '100%',
        height: '640px'
    };

    const pathCoordinates = [
        { lat: 10.875905513200667, lng: 106.81061307518222 },
        { lat: 10.892025350418454, lng: 106.82262937145988 }
    ]
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

    return isLoaded ? (
        <>
            <div className="w-full h-full bg-[#1A202C] pb-[30px]">
                <div className='flex w-full h-[15%] justify-center items-center gap-5'>
                    <button type="button" className="h-[50px] w-[100px] rounded text-white bg-green-400 hover:bg-green-500 ">Check In</button>
                    <button type="button" className="h-[50px] w-[100px] rounded text-white bg-red-700 hover:bg-red-800 ">Check Out</button>
                    <button type="button" className="h-[50px] w-[150px] rounded text-white bg-purple-700 hover:bg-purple-800 ">Edit Infomation</button>
                </div>
                <div className='text-white'>
                    <h3 className='flex justify-center'>Your Route</h3>
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
            </div>
        </>
    ) : <></>
}

export default CheckInOut;
