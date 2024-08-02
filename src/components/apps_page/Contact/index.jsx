import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        
        <>
            <div className="pro-div contact-div">
                <h1 className='pro-head'> Contact Us </h1>
            </div>
        </>

    )
}

export default Contact;