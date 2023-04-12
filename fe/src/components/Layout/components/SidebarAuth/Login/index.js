import Button from '../../../../Commons/Button';
import InputForm from '../../../../InputForm';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="min-w-[240px] h-screen bg-[#364153] flex justify-center items-center">
            <div className="px-[20px] h-2/3 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <img alt="logo" src="/images/logo.png" />
                    <span className="text-xl font-bold text-white mt-[23px]">Log in</span>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <InputForm
                            nameLabel="Email Address"
                            placeholder="example@gmail.com"
                            width="w-96"
                            height="h-[50px]"
                        />
                    </div>
                    <div className="mt-[70px]">
                        <InputForm
                            nameLabel="Password Address"
                            placeholder="123@yourname"
                            width="w-96"
                            height="h-[50px]"
                        />
                    </div>
                    <div className="mt-[70px] w-full">
                        <input type="checkbox" className="bg-[#364153]" />
                        <label className="ml-[10px] text-white">Rememeber me</label>
                    </div>
                    <div className="mt-[70px]">
                        <Button name="Log in" width="w-96" height="h-[50px]" bgColor="bg-[#605CFF]" />
                    </div>
                    <div className="mt-[30px]">
                        <span className="text-white text-center">
                            Don’t have account yet?
                            <Link className="text-[#605CFF] ml-[5px]" to="/signup">
                                New Account
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
