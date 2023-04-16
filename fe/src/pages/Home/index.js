import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BoxContent from '../../components/Commons/DashboardBoxContent';
import BoxItem from '../../components/Commons/DashboardBoxInfor';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Commons/Button';
import { useState } from 'react';
import BoxInfo from '../../components/Commons/DashboardVehicleInfo';

import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../../services/Auth/AuthSlice';
import jwt from 'jwt-decode';

function Home() {
    console.log('sdfsdfsdfsdf');
    // const user = useSelector(selectCurrentUser);
    // const token = useSelector(selectCurrentToken);

    // const userAuthSuccess = user ? `Hello ${user}` : 'Hello';
    // const tokenAuthSuccess = `${token.slice(0, 9)}...`;

    // console.log('sdf');
    // console.log(userAuthSuccess, ' ', tokenAuthSuccess);

    const [janitors, setJanitors] = useState([
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            mcp: 'MCP 1',
            area: 'District 1',
            timePerMonth: 123,
        },
        {
            id: '876368',
            name: 'Petter',
            avatar: 'in future',
            status: 0,
            mcp: null,
            area: null,
            timePerMonth: 124,
        },
        {
            id: '876412',
            name: 'Vecent',
            avatar: 'in future',
            status: 0,
            mcp: null,
            area: null,
            timePerMonth: 125,
        },
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            mcp: 'MCP 1',
            area: 'District 1',
            timePerMonth: 123,
        },
    ]);
    const [collectors, setCollectors] = useState([
        {
            id: '876364',
            name: 'Jonhson',
            avatar: 'in future',
            status: 1,
            currentVehicle: 'Truct 8',
            timePerMonth: 123,
        },
        {
            id: '876368',
            name: 'Petter',
            avatar: 'in future',
            status: 0,
            currentVehicle: null,
            timePerMonth: 124,
        },
        {
            id: '876412',
            name: 'Vecent',
            avatar: 'in future',
            status: 0,
            currentVehicle: null,
            timePerMonth: 125,
        },
    ]);
    // const dataTime = () => {
    //     const date = new Date();

    // }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className="p-[20px] flex flex-col w-full h-screen bg-[#1A202C]">
            <div className="w-full flex justify-between text-white items-center">
                <span className="font-bold text-xl pb-[10px]">Dashboard</span>
                {/* <div className="flex justify-center items-center">
                    <div className="w-[170px] h-[50px] bg-[#364153] rounded-lg mr-[20px] flex justify-center items-center">
                        <span>02-03-2023</span>
                        <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]" />
                    </div>
                    <div className="w-[170px] h-[50px] bg-[#364153] rounded-lg mr-[20px] flex justify-center items-center">
                        <span>05-03-2023</span>
                        <FontAwesomeIcon icon={faAngleDown} className="ml-[10px]" />
                    </div>
                </div> */}
            </div>
            <div className="w-full grid grid-cols-3 justify-around items-center">
                <BoxItem srcIcon="/images/icon-heart.png" headerInfo="15" contentInfo="MCP đã đầy" />
                <BoxItem srcIcon="/images/icon-collector.png" headerInfo="10" contentInfo="số lượng routes" />
                <BoxItem srcIcon="/images/icon-resource.png" headerInfo="20+" contentInfo="nguồn lực" />
            </div>
            <div className="w-full flex flex-col flex-1 min-h-0">
                <div className="flex flex-row w-full h-1/2">
                    <div className="py-[10px] w-3/5 h-full">
                        <BoxContent title="Quản lý lao công">
                            <div className="text-white text-sm w-full flex flex-col">
                                {/* header of table */}
                                <tr className="flex justify-center items-center py-[10px] border-b">
                                    <th className="flex justify-center items-center w-1/6">
                                        <span className="w-full">
                                            Janitor ID{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Janitor Name{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/6">
                                        <span className="w-full">
                                            Status{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/5">
                                        <span className="w-full">
                                            Current Location{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/6">
                                        <span className="w-full">
                                            Time/Month
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                </tr>
                                {/* rows of table */}
                                <div className="h-full overflow-auto">
                                    {janitors.map((janitor, index) => {
                                        return (
                                            <tr
                                                className={`flex justify-center items-center py-[10px] rounded-lg ${
                                                    index % 2 !== 0 ? 'bg-[#1A202C]' : ''
                                                }`}
                                                key={index}
                                            >
                                                <th className="flex justify-center items-center w-1/6">
                                                    <span className="w-full">#{janitor.id}</span>
                                                </th>
                                                <th className="flex justify-left items-center w-1/4">
                                                    <div className="flex justify-center items-center">
                                                        <img alt="avatar" src="/images/fake-avatar-janitor.png" />
                                                        <span className="w-full ml-[10px]">{janitor.name}</span>
                                                    </div>
                                                </th>
                                                <th className="flex justify-center items-center w-1/6">
                                                    <Button
                                                        name={janitor.status ? 'Active' : 'Inactive'}
                                                        width="w-2/3"
                                                        height="h-full"
                                                        bgColor={janitor.status ? 'bg-[#5CD8FF]' : 'bg-[#FF5C7A]'}
                                                    />
                                                </th>
                                                <th className="flex justify-center items-center w-1/5">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <span>{janitor.mcp ?? '-'}</span>
                                                        <span>{janitor.area ?? '-'}</span>
                                                    </div>
                                                </th>
                                                <th className="flex justify-center items-center w-1/6">
                                                    <span className="w-full">{janitor.timePerMonth}</span>
                                                </th>
                                            </tr>
                                        );
                                    })}
                                </div>
                            </div>
                        </BoxContent>
                    </div>
                    <div className="py-[10px] pl-[10px] w-2/5 justify-self-stretch">
                        <BoxContent title="Quản lý công việc">
                            <div className="h-full"></div>
                        </BoxContent>
                    </div>
                </div>
                <div className="flex flex-row w-full h-1/2">
                    <div className="py-[10px] w-3/5">
                        <BoxContent title="Quản lý người vận chuyển">
                            <div className="text-white text-sm w-full flex flex-col">
                                {/* header of table */}
                                <tr className="flex justify-center items-center py-[10px] border-b">
                                    <th className="flex justify-center items-center w-1/5">
                                        <span className="w-full">
                                            Collector ID{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Collector Name{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Current Vehicle{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Current Location{' '}
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                    <th className="flex justify-center items-center w-1/4">
                                        <span className="w-full">
                                            Time/Month
                                            <FontAwesomeIcon icon={faAngleDown} className="text-white pl-[10px]" />
                                        </span>
                                    </th>
                                </tr>
                                {/* rows of table */}
                                <div className="h-full overflow-auto">
                                    {collectors.map((collector, index) => {
                                        return (
                                            <tr
                                                className={`flex justify-center items-center py-[10px] rounded-lg ${
                                                    index % 2 !== 0 ? 'bg-[#1A202C]' : ''
                                                }`}
                                                key={index}
                                            >
                                                <th className="flex justify-center items-center w-1/5">
                                                    <span className="w-full">#{collector.id}</span>
                                                </th>
                                                <th className="flex justify-left items-center w-1/4">
                                                    <div className="flex justify-center items-center">
                                                        <img alt="avatar" src="/images/fake-avatar-janitor.png" />
                                                        <span className="w-full ml-[10px]">{collector.name}</span>
                                                    </div>
                                                </th>
                                                <th className="flex justify-center items-center w-1/4">
                                                    <Button
                                                        name={collector.status ? 'Active' : 'Inactive'}
                                                        width="w-2/3"
                                                        height="h-full"
                                                        bgColor={collector.status ? 'bg-[#5CD8FF]' : 'bg-[#FF5C7A]'}
                                                    />
                                                </th>
                                                <th className="flex justify-center items-center w-1/4">
                                                    <span className="">{collector.currentVehicle ?? '-'}</span>
                                                </th>
                                                <th className="flex justify-center items-center w-1/4">
                                                    <span className="w-full">{collector.timePerMonth}</span>
                                                </th>
                                            </tr>
                                        );
                                    })}
                                </div>
                            </div>
                        </BoxContent>
                    </div>
                    <div className="py-[10px] pl-[10px] w-2/5">
                        <BoxContent title="Quản lý phương tiện">
                            {/* <div className="">
                                <div className="flex justify-start border-b">
                                    <BoxInfo srcImage="/images/fake-avatar-janitor.png" name="Truck 8" weight="80 ton" />
                                </div>
                                <div className="flex justify-start">
                                    <BoxInfo srcImage="/images/fake-avatar.png" name="Truck 16" weight="122 ton" />
                                </div>
                            </div> */}
                        </BoxContent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
