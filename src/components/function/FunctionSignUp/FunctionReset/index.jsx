import React, { useState, useEffect } from 'react';
import { CiUndo } from 'react-icons/ci';
import { PiPencilThin } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

const FunctionReset = () => {

    useEffect(() => {
        document.title = "Function Reset Form";
        let storedUserData = JSON.parse(localStorage.getItem("userData"));
        console.log(storedUserData, "Function Reset Form");
        if (storedUserData) {
            setResetData(storedUserData);
        }
    }, []);

    let [resetData, setResetData] = useState({ fname: "", email: "", newpassword: "", c_newpassword: "" }),
    { newpassword, c_newpassword } = resetData,

    navigate = useNavigate(),

    resetsData = (e) => {
        let { name, value } = e.target;
        setResetData({ ...resetData, [name]: value });
    },

    handleSubmit = (e) => {
        
        e.preventDefault();
        let { newpassword, c_newpassword, fname, email } = resetData;

        if (!newpassword || !c_newpassword) {
            toast.warn(`Password and Confirm Password fields cannot be empty...!`, { autoClose: 750 });
            return;
        }

        if (newpassword === c_newpassword) {
            localStorage.setItem("Full Name", fname);
            localStorage.setItem("Email ID", email);
            localStorage.setItem("Password", newpassword);
            toast.success(`${fname} successfully updated password ${newpassword} for email id ${email}...!`, { autoClose: 750 });
            navigate("/home");
        } else {
            toast.warn(`Password - ${newpassword} & Confirm Password - ${c_newpassword} are not matching...!`, { autoClose: 750 });
        }
    },    

    handleRemember = () => {
        navigate("/function-login-form");
        toast.info(`Login with registered eMail id with password...!`, { autoClose: 750 });
    },

    handleClear = () => {
        setResetData({ newpassword: "", c_newpassword: "" });
        toast.warn("Form Cleared Successfully...!", { autoClose: 750 });
    };

    return (
        <>
            <h1 className='pro-head'> Function Reset Form </h1>
            <div className='pro-div login-up-div'>
                <form className='pro-login-state'>
                    <label className='pro-label' htmlFor="password">Password</label>
                    <input className='product-input' type="text" name='newpassword' placeholder='Enter Your New Password'
                        value={newpassword} onChange={resetsData}
                    />

                    <label className='pro-label' htmlFor="c_newpassword">Confirm Password</label>
                    <input className='product-input' type="text" name='c_newpassword' placeholder='Re-Enter Your New Password'
                        value={c_newpassword} onChange={resetsData}
                    />

                    <div className="btn-div">
                        <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearReset" onClick={handleClear} />
                        <ReactTooltip id="clearReset" place="bottom" effect="solid"> Clear the password fields </ReactTooltip>
                        <PiPencilThin size={35} className="pro-btn inc-btn" data-tip data-for="doReset" onClick={handleSubmit} />
                        <ReactTooltip id="doReset" place="bottom" effect="solid"> Reset the password </ReactTooltip>
                    </div>

                    <div className="link-div remember-pass-div">
                        <Link onClick={handleRemember} className='log-link'> Remembered Password? </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FunctionReset;