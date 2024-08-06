import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

const FunctionLogin = () => {

    useEffect(() => {
        document.title = "Function Login Form";
        let storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
            setLoginData(storedUserData);
        }
    }, []);

    let [loginData, setLoginData] = useState({ fname: "", email: "", password: "" }),
    { fname, email, password } = loginData,
    navigate = useNavigate(),

    loginsData = (e) => {
        let { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    },

    handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { fname, email, password };
            console.log(payload, "Function Login Form");
            localStorage.setItem("Full Name", loginData.fname);
            localStorage.setItem("eMail ID", loginData.email);
            localStorage.setItem("Password", loginData.password);
            navigate("/home");
            toast.info(`${fname} successfully logged in with ${email} and ${password}...!`, { autoClose: 750 });    
        }
    },

    handleClear = () => {
        setLoginData({ fname: "", email: "", password: "" });
    },

    handleRegister = () => {
        navigate("/function-signup-form");
        toast.warn(`Please create an account to login...!`, { autoClose: 750 });
    },

    handleForget = () => {
        navigate("/function-reset-form");
        toast.warn(`Create a new password to login again...!`, { autoClose: 750 });
    };

    return (

        <>
            <h1 className='pro-head'> Function Login Form </h1>
            <div className='pro-div login-up-div'>
                <form className='pro-login-state'>
                    <label className='pro-label' htmlFor="email">eMail ID</label>
                    <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID' 
                        onChange={loginsData}
                    />

                    <label className='pro-label' htmlFor="password">Password</label>
                    <input className='product-input' type="text" name='password' value={password} placeholder='Enter Your Password' 
                        onChange={loginsData}
                    />

                    <div className="btn-div">
                        <CiUndo className="pro-btn reset-btn" data-tip data-for="clearLogin" onClick={handleClear} />
                        <ReactTooltip id="clearLogin" place="bottom" effect="solid"> Clear the login fields </ReactTooltip>
                        <PiPencilThin className="pro-btn inc-btn" data-tip data-for="doLogin" onClick={handleLogin} />
                        <ReactTooltip id="doLogin" place="bottom" effect="solid"> Login to app </ReactTooltip>
                    </div>

                    <div className="link-div alr-log-div">
                        <Link onClick={handleForget} className='log-link'> Forget Password? </Link>
                        <Link onClick={handleRegister} className='log-link'> Not Registered? </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FunctionLogin;