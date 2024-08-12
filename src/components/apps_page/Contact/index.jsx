import React, { useEffect, useState } from 'react';
import { PiTelegramLogoThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    let [contactData, setContactData] = useState({ fname: "", lname: "", email: "", mobile: "", message: "" }),
    { fname, lname, email, mobile, message } = contactData,

    contactsData = (e) => {
        let { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    },

    handleKeyPress = (e) => {
        if (/[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace") {
        } else { e.preventDefault(); }
    },

    handleSubmit = async (e) => {
        e.preventDefault();
        if (!fname || !email || !mobile) {
            let missingField = !fname ? "First Name" : !email ? "email ID" : "Mobile Number";
            toast.warn(`Please provide input to ${missingField} fields...!`, { autoClose: 750 });
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.warn(`${email} is not valid email id...!`, {autoClose : 750});
            return;
        }

        try {
            let fullName = fname + " " + lname;
            toast.success(`${fullName} submitted form successfully...!`, {autoClose : 750});
            setContactData({ fname: "", lname: "", email: "", mobile: "", message: "" });
        } catch (err) {
            toast.error("Please try again later :", err, {autoClose : 750});
        }
    },

    handleClear = (e) => {
        setContactData({ fname: "", lname: "", email: "", mobile: "", message: "" });
        toast.warn("Input fields cleared successfully...!", {autoClose : 750});
    };

    return (
        
        <>
            <h1 className='pro-head'> Contact Us </h1>
            <div className="pro-div contact-div">
                <form className='pro-state'>
                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> First Name </label>
                            <input className='product-input' type="text" name='fname' value={fname} placeholder='Enter Your First Name'
                                onChange={contactsData}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> Last Name </label>
                            <input className='product-input' type="text" name='lname' value={lname} placeholder='Enter Your Last Name'
                                onChange={contactsData}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> Mobile Number </label>
                            <input className='product-input' type="tel" name='mobile' value={mobile} placeholder='Enter Your Mobile Number'
                                onChange={contactsData} maxLength={10} onKeyDown={handleKeyPress} 
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> eMail ID </label>
                            <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID'
                                onChange={contactsData}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='pro-label' htmlFor="pdesc"> Message </label>
                        <textarea className='product-textarea' name='message' value={message} placeholder='Enter Your Message Here'
                            onChange={contactsData} rows="2" cols="50"
                        ></textarea>
                    </div>

                    <div className="btn-div">
                        <CiUndo size={35} className="pro-btn reset-btn" data-tip data-for="clearContact" onClick={handleClear} />
                        <ReactTooltip id="clearContact" place="bottom" effect="solid"> Clear the input fields </ReactTooltip>
                        <PiTelegramLogoThin size={35} className="pro-btn inc-btn" data-tip data-for="sendContact" onClick={handleSubmit} />
                        <ReactTooltip id="sendContact" place="bottom" effect="solid"> Send the message </ReactTooltip>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Contact;