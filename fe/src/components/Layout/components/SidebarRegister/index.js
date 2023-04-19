import { useEffect, useRef, useState } from 'react';
import InputForm from '../../../InputForm';
import Button from '../../../Commons/Button';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../../../services/Auth/registerApiSlice';

function SideBarRegister({ toogleMenu }) {
    const [register, { isLoading }] = useRegisterMutation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errEmail, setErrEmail] = useState();
    const [errFirstName, setErrFirstName] = useState();
    const [errLastName, setErrLastName] = useState();
    const [errPassword, setErrPassword] = useState();

    const userRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrEmail(null);
    }, [email]);

    useEffect(() => {
        setErrFirstName(null);
    }, [firstName]);

    useEffect(() => {
        setErrLastName(null);
    }, [lastName]);

    useEffect(() => {
        setErrPassword(null);
    }, [password, confirmPassword]);

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleSubmit = async () => {
        // validate field is not field
        if (!email) setErrEmail('Email is required');
        if (!firstName) setErrFirstName('First Name is required');
        if (!lastName) setErrLastName('Last Name is required');
        if (!password) setErrPassword('Password is required');

        // validate confirm password
        if (password !== confirmPassword) {
            setErrPassword('Password is not matched !!!');
        }

        if (!email || !firstName || !lastName || !password) {
            return;
        } else {
            try {
                const userData = {
                    email,
                    firstName,
                    lastName,
                    password,
                    role: 1,
                };

                // const user = await register({ ...userData }).unwrap();
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setConfirmPassword('');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="h-full w-full px-[30px] flex flex-col items-center text-white">
            <div className="flex items-center justify-between w-full">
                <span className="text-2xl">Add User</span>
                <img
                    alt="icon"
                    onClick={toogleMenu}
                    className="hover:cursor-pointer hover:opacity-70"
                    src="/images/close-icon.png"
                />
            </div>
            <div className="my-[50px]">
                <img src="images/upload-avatar-icon.png" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col">
                    <InputForm
                        nameLabel="Email Address"
                        refInput={userRef}
                        valueInput={email}
                        handleOnChange={handleEmailInput}
                        placeholder="example@gmail.com"
                        width="w-96"
                        height="h-[50px]"
                    />
                </div>
                <div className="mt-[40px] text-left w-full">
                    <span className={errEmail ? 'text-rose-600' : 'invisible'}>{errEmail ?? ''}</span>
                </div>
                <div className="">
                    <InputForm
                        nameLabel="First Name"
                        valueInput={firstName}
                        handleOnChange={handleFirstNameInput}
                        placeholder="Nguyen"
                        width="w-96"
                        height="h-[50px]"
                    />
                </div>
                <div className="mt-[40px] text-left w-full">
                    <span className={errFirstName ? 'text-rose-600' : 'invisible'}>{errFirstName ?? ''}</span>
                </div>
                <div className="">
                    <InputForm
                        nameLabel="Last Name"
                        placeholder="Vuong"
                        valueInput={lastName}
                        handleOnChange={handleLastNameInput}
                        width="w-96"
                        height="h-[50px]"
                    />
                </div>
                <div className="mt-[40px] text-left w-full">
                    <span className={errLastName ? 'text-rose-600' : 'invisible'}>{errLastName ?? ''}</span>
                </div>
                <div className="">
                    <InputForm
                        nameLabel="Password"
                        valueInput={password}
                        handleOnChange={handlePasswordInput}
                        placeholder="Your password"
                        width="w-96"
                        height="h-[50px]"
                        type="password"
                    />
                </div>
                <div className="mt-[40px] text-left w-full">
                    <span className={errPassword ? 'text-rose-600' : 'invisible'}>{errPassword ?? ''}</span>
                </div>
                <div className="">
                    <InputForm
                        nameLabel="Confirm Password"
                        valueInput={confirmPassword}
                        handleOnChange={handleConfirmPasswordInput}
                        placeholder="Type password again"
                        width="w-96"
                        height="h-[50px]"
                        type="password"
                    />
                </div>
                <div
                    className="mt-[70px] hover:cursor-pointer hover:opacity-90 hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150"
                    onClick={handleSubmit}
                >
                    <Button name="Create User" width="w-96" height="h-[50px]" bgColor="bg-[#605CFF]" />
                </div>
            </div>
        </div>
    );
}

export default SideBarRegister;
