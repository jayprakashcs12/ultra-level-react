import React, { useEffect } from 'react'
import FunctionProducts from './FunctionProducts';

const FunctionProps = () => {

    useEffect(() => {
        document.title = "Function Props";
    }, []);

    return (
        
        <>
            <h1 className='pro-head'>Function Props Details</h1>
            <FunctionProducts />
        </>

    )
}

export default FunctionProps;