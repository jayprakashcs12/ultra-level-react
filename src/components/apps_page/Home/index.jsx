import React, { useEffect, useState } from 'react';

export default function Home() {
    let [fname, setFname] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    useEffect(() => {
        document.title = "Home Page";

        let storedFname = localStorage.getItem("Full Name"),
            storedEmail = localStorage.getItem("eMail ID"),
            storedPass = localStorage.getItem("Password");

        if (storedFname) setFname(storedFname);
        if (storedEmail) setEmail(storedEmail);
        if (storedPass) setPassword(storedPass);

        console.log(storedFname, storedEmail, storedPass);
        
        // Clear localStorage after retrieving the values
        localStorage.removeItem("Full Name");
        localStorage.removeItem("eMail ID");
        localStorage.removeItem("Password");
    }, []);

    return (
        <>
            <h1 className='pro-head'>Home</h1>
            <div className="pro-div home-div">
                <div className="main-div">
                    {(fname || email || password) ? (
                        <p className='pro-para'>
                            {fname} {email} {password}
                        </p>
                    ) : (
                        <>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                            <p className='pro-para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, excepturi quam, sequi, voluptatibus totam sint unde eius recusandae facere nam doloribus assumenda ex velit id. Eius et quia namaa culpa!
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}