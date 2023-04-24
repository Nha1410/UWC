import { useEffect, useRef, useState } from 'react';
import InputForm from '../../../InputForm';
import Button from '../../../Commons/Button';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../../../services/Auth/registerApiSlice';
import axios from 'axios';

function SideBarRegister({ toogleMenu }) {
    const [register, { isLoading }] = useRegisterMutation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [file, setFile] = useState();
    const [role, setRole] = useState(3);

    const [errEmail, setErrEmail] = useState();
    const [errFirstName, setErrFirstName] = useState();
    const [errLastName, setErrLastName] = useState();
    const [errPassword, setErrPassword] = useState();
    const [preview, setPreview] = useState();

    const userRef = useRef();
    const fileRef = useRef();

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
                    role: 3,
                    file,
                };

                const formData = new FormData();
                formData.append('file', file);
                formData.append('email', email);
                formData.append('firstName', firstName);
                formData.append('lastName', lastName);
                formData.append('password', password);
                formData.append('role', role);
                const user = axios.post('http://localhost:5001/api/user/register', formData, {
                    headers: { 'Content-Type': `multipart/form-data; boundary=Boundary-${new Date().getTime()}}` },
                });
                console.log(user);
                // const user = await register({ formData }).unwrap();
                setEmail('');
                setFirstName('');
                setLastName('');
                setPassword('');
                setConfirmPassword('');
                toogleMenu();
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChange = (e) => {
        e.target.files[0] && setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (fileRef.current) {
            fileRef.current.addEventListener('change', handleChange);
        }
        return () => {
            if (fileRef.current) {
                fileRef.current.removeEventListener('change', handleChange);
            }
        };
    }, [fileRef]);

    useEffect(() => {
        if (!file) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
    }, [file]);

    const handleClickUploadAvatar = () => {
        fileRef.current.click();
    };

    const handleRoleChange = (e) => {
        setRole(Number(e.target.value));
    };
    const mystyle = {
        backgroundColor: 'white',
        textColor: 'black'
    }
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
            <div className="my-[50px] hover:cursor-pointer hover:opacity-70">
                <input type="file" ref={fileRef} className="hidden" />
                <img
                    onClick={handleClickUploadAvatar}
                    alt="upload"
                    src={preview || 'images/upload-avatar-icon.png'}
                    className="w-150[px] h-[150px] object-fill"
                />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col">
                    <InputForm
                        style={mystyle}
                        nameLabel="Email Address"
                        refInput={userRef}
                        valueInput={email}
                        handleOnChange={handleEmailInput}
                        placeholder="example@gmail.com"
                        width="w-96"
                        height="h-[50px]"
                        autofill="false"
                    />
                </div>
                <div className="mt-[40px] text-left w-full">
                    <span className={errEmail ? 'text-rose-600' : 'invisible'}>{errEmail ?? ''}</span>
                </div>
                <div className="">
                    <InputForm
                                        style={mystyle}
                        nameLabel="First Name"
                        valueInput={firstName}
                        handleOnChange={handleFirstNameInput}
                        placeholder="Nguyen"
                        width="w-96"
                        height="h-[50px]"
                        autofill="false"
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
                        autofill="false"
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
                        placeholder="Password of User"
                        width="w-96"
                        height="h-[50px]"
                        type="password"
                        autofill="false"
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
                <div className="mt-[40px] w-full text-lg">
                    <label>
                        <input type="radio" name="role" value="3" checked={role === 3} onChange={handleRoleChange} />
                        Janitor
                    </label>
                    <label className="ml-[30px]">
                        <input type="radio" name="role" value="2" checked={role === 2} onChange={handleRoleChange} />
                        Collector
                    </label>
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
