import React, { useEffect } from 'react';
import FunctionGrandParents from './FunctionGrandParents';

const FunctionPropsDrilling = () => {

    useEffect(() => {
        document.title = "Function Props Drilling";
    }, []);

    return (
        
        <>
            <h1 className='pro-head'>Function Props Details</h1>
            <FunctionGrandParents />
        </>

    )
}

export default FunctionPropsDrilling;