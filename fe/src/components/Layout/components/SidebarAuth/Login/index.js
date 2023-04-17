import { useEffect, useRef, useState } from 'react';
import { setCredentials } from '../../../../../services/Auth/AuthSlice';
import Button from '../../../../Commons/Button';
import InputForm from '../../../../InputForm';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../../services/Auth/authApiSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('dsfsdfs');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login({ email, password }).unwrap();
            console.log(userData);
            dispatch(setCredentials({ ...userData, email }));
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    const handleUserInput = (e) => setEmail(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);
    return (
        <div className="min-w-[240px] h-screen bg-[#364153] flex justify-center items-center">
            <div className="px-[20px] h-2/3 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <img alt="logo" src="/images/logo.png" />
                    <span className="text-xl font-bold text-white mt-[23px]">Log in</span>
                </div>
                <div className="flex flex-col items-center justify-center py-[20px]">
                    <p ref={errRef} className={errMsg ? 'text-rose-600' : 'invisible'}>
                        {errMsg}
                    </p>
                </div>
                <form className="flex flex-col items-center">
                    <div>
                        <InputForm
                            refInput={userRef}
                            valueInput={email}
                            handleOnChange={handleUserInput}
                            nameLabel="Email Address"
                            placeholder="example@gmail.com"
                            width="w-96"
                            height="h-[50px]"
                        />
                    </div>
                    <div className="mt-[70px]">
                        <InputForm
                            nameLabel="Password Address"
                            valueInput={password}
                            type="password"
                            handleOnChange={handlePwdInput}
                            placeholder="123@yourname"
                            width="w-96"
                            height="h-[50px]"
                        />
                    </div>
                    <div className="mt-[70px] w-full">
                        <input type="checkbox" className="bg-[#364153]" />
                        <label className="ml-[10px] text-white">Rememeber me</label>
                    </div>
                    <div
                        className="mt-[70px] hover:cursor-pointer hover:opacity-90 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150"
                        onClick={handleSubmit}
                    >
                        <Button name="Log in" width="w-96" height="h-[50px]" bgColor="bg-[#605CFF]" />
                    </div>
                    <div className="mt-[30px]">
                        <span className="text-white text-center">
                            Don’t have account yet?
                            <span className="hover:opacity-80 text-[#605CFF] ml-[5px]">
                                <Link className="" to="/signup">
                                    New Account
                                </Link>
                            </span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Sidebar;
