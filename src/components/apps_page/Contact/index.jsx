import React, { useEffect, useState } from 'react';
import { PiPencilThin } from 'react-icons/pi';
import ReactTooltip from 'react-tooltip';
import { CiUndo } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    let [contactData, setContactData] = useState({
        fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: ""
    }),

    { fname, mname, lname, email, mobile, address, message } = contactData,

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
        if (!fname || !lname || !email || !mobile || !address) {
            toast.error("Please fill out all required fields.");
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error(`${email} is not valid email id...!`, {autoClose : 750});
            return;
        }
        try {
            let fullName = fname + " " + mname + " " + lname;
            toast.success(`${fullName} submitted form successfully...!` );
            setContactData({ fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: "" });
        } catch (err) {
            toast.error("Failed to submit the form. Please try again later.", err, {autoClose : 750});
        }
    },

    handleClear = (e) => {
        setContactData({ fname: "", mname: "", lname: "", email: "", mobile: "", address: "", message: "" });
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
                            <label className='pro-label' htmlFor="pname"> Middle Name </label>
                            <input className='product-input' type="text" name='mname' value={mname} placeholder='Enter Your Middle Name'
                                onChange={contactsData}
                            />
                        </div>
                    </div>

                    <div className="pro-row-data">
                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> Last Name </label>
                            <input className='product-input' type="text" name='lname' value={lname} placeholder='Enter Your Last Name'
                                onChange={contactsData}
                            />
                        </div>

                        <div className="form-group">
                            <label className='pro-label' htmlFor="pname"> eMail ID </label>
                            <input className='product-input' type="email" name='email' value={email} placeholder='Enter Your eMail ID'
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
                            <label className='pro-label' htmlFor="pname"> Location </label>
                            <input className='product-input' type="text" name='address' value={address} placeholder='Enter Your Location'
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
                        <CiUndo className="pro-btn reset-btn" data-tip data-for="clearProduct" onClick={handleClear} />
                        <ReactTooltip id="clearProduct" place="bottom" effect="solid"> Clear the product fields </ReactTooltip>
                        <PiPencilThin className="pro-btn inc-btn" data-tip data-for="updateProduct" onClick={handleSubmit} />
                        <ReactTooltip id="addProduct" place="bottom" effect="solid"> Add the product </ReactTooltip>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Contact;