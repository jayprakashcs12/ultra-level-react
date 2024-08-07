import React, { useEffect } from 'react';
import FunctionHOC01 from './FunctionHOC01';

const FunctionHOC = () => {

    useEffect(() => {
        document.title = "Function HOC";
    }, []);

    return (

        <>
            <h1 className='pro-head'> Function HOC </h1>
            <FunctionHOC01 />
        </>
    )
}

export default FunctionHOC;