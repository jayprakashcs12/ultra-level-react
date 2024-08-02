import React, { useContext, useEffect } from 'react';
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import { CreateContextApi } from '../FunctionContextApi';

const FunctionContent = () => {
    const context = useContext(CreateContextApi);

    useEffect(() => {
        document.title = "Function Context API";
    }, []);

    return (
        <div className='counter-apps'>
            <h1 className='pro-head count-head'> Function Counter Applications </h1>
            <h1 className='pro-head count-head'> {context.count} </h1>
            <div className="btn-div">
                <CiCircleMinus className="ecomm-btn dec-btn" onClick={context.handleDecrement} />
                <CiPower className="ecomm-btn reset-btn" onClick={context.handleReset} />
                <CiCirclePlus className="ecomm-btn inc-btn" onClick={context.handleIncrement} />
            </div>
        </div>
    );
};

export default FunctionContent;