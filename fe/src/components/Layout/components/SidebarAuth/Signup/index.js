import Button from '../../../../Commons/Button';
import InputForm from '../../../../InputForm';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="min-w-96 h-screen bg-[#364153] flex justify-center items-center min-h-0 overflow-auto">
            <div className="px-[20px] h-5/6 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <img alt="logo" src="/images/logo.png" />
                    <span className="text-xl font-bold text-white mt-[23px]">Log in</span>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <InputForm nameLabel="Full Name" placeholder="Nguyen Vuong" width="w-96" height="h-[50px]" />
                    </div>
                    <div className="mt-[40px]">
                        <InputForm
                            nameLabel="Email Address"
                            placeholder="example@gmail.com"
                            width="w-96"
                            height="h-[50px]"
                        />
                    </div>
                    <div className="mt-[40px]">
                        <InputForm nameLabel="Username" placeholder="Vuong Nguyen" width="w-96" height="h-[50px]" />
                    </div>
                    <div className="mt-[40px]">
                        <InputForm nameLabel="Password" placeholder="Your password" width="w-96" height="h-[50px]" />
                    </div>
                    <div className="mt-[50px]">
                        <Button name="Create Account" width="w-96" height="h-[50px]" bgColor="bg-[#605CFF]" />
                    </div>
                    <div className="mt-[30px]">
                        <span className="text-white text-center">
                            Already have an account?
                            <Link className="text-[#605CFF] ml-[5px]" to="/login">
                                Log in
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
