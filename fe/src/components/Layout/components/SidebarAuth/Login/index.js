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
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('dsfsdfs');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login({ user, pwd }).unwrap();
            dispatch(setCredentials({ ...userData, user }));
            setUser('');
            setPwd('');
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

    const handleUserInput = (e) => setUser(e.target.value);
    const handlePwdInput = (e) => setPwd(e.target.value);
    return (
        <div className="w-1/4 h-screen bg-[#364153] flex justify-center items-center">
            <div className="w-1/4 h-2/3 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <img alt="logo" src="/images/logo.png" />
                    <span className="text-xl font-bold text-white mt-[23px]">Log in</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
                        {errMsg}
                    </p>
                </div>
                <form className="flex flex-col items-center">
                    <div>
                        <InputForm
                            refInput={userRef}
                            valueInput={user}
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
                            valueInput={pwd}
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
                </form>
            </div>
        </div>
    );
}

export default Sidebar;
