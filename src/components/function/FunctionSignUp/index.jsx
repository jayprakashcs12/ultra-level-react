import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

const FunctionSignUp = () => {

    useEffect(() => {
        document.title = "Function Sign-Up Forms";
        localStorage.removeItem("userData");
    }, []); 

    let [funData, setFunData] = useState({ fname: "", lname: "", mobile: "", email: "", password: "", r_password: "" }),
    { fname, lname, mobile, email, password, r_password } = funData,
    navigate = useNavigate(),

    signUpData = (e) => {
        let { name, value } = e.target;
        setFunData({ ...funData, [name]: value });
    },

    handleKeyPress = (e) => {
        if (/[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace") {
        } else { e.preventDefault(); }
    },

    handleSubmit = (e) => {

        e.preventDefault();
        if (!fname || !email || !password) {
            toast.error("All fields are required...!", { autoClose: 750 });
        } else {
            let payload = { fname, lname, email, password };
            console.log(payload, "Function SignUp Form");
            localStorage.setItem("userData", JSON.stringify(payload)); 
            navigate("/function-login-form");
            toast.success(`${fname} successfully created account with eMail ID - ${email} and Password - ${password}...!`, { autoClose: 750 });
        }
    },

    handleLogin = () => {

        navigate("/function-login-form");
        toast.info(`Login with registered eMail id with password...!`, { autoClose: 750 });
    },

    handleClear = () => {
        
        setFunData({ fname: "", lname: "", mobile: "", email: "", password: "", r_password: "" });
        toast.warn("Form Cleared Successfully...!", { autoClose: 750 });
    };

    return (

        <>
            <h1 className='pro-head'> Function Sign Up Form </h1>
            <div className='pro-div sign-up-div'>
                <form className='pro-state'>
                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="fname"> First Name </label>
                            <input className='product-input' type="text" name='fname' value={fname} placeholder='Enter Your First Name'
                                onChange={signUpData}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="lname"> Last Name </label>
                            <input className='product-input' type="text" name='lname' value={lname} placeholder='Enter Your Last Name'
                                onChange={signUpData}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="mobile"> Mobile Number </label>
                            <input className='product-input' type="tel" name='mobile' value={mobile} placeholder='Enter Your Mobile Number'
                                onChange={signUpData} maxLength={10} onKeyDown={handleKeyPress} 
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="email"> eMail ID </label>
                            <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID'
                                onChange={signUpData}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="password"> Password </label>
                            <input className='product-input' type="text" name='password' value={password} placeholder='Enter Your Password'
                                onChange={signUpData}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="r_password"> Repeat Password </label>
                            <input className='product-input' type="text" name='r_password' value={r_password} placeholder='Enter Your Repeat Password'
                                onChange={signUpData}
                            />
                        </div>
                    </div>

                    <div className="btn-div">
                        <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearSignup" onClick={handleClear} />
                        <ReactTooltip id="clearSignup" place="bottom" effect="solid"> Clear the sign up form </ReactTooltip>
                        <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="doSignup" onClick={handleSubmit} />
                        <ReactTooltip id="doSignup" place="bottom" effect="solid"> Signup the app </ReactTooltip>
                    </div>

                    <div className="link-div alr-reg-div">
                        <Link onClick={handleLogin} className='log-link'> Already Registered? </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FunctionSignUp;