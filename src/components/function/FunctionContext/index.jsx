import React from 'react';
import FunctionContent from './FunctionContent';
import FunctionUser from './FunctionContextApi';

const FunctionContext = () => {
    
    return (
        <>
            <FunctionUser>
                <div className="pro-div context-div">
                    <FunctionContent />
                </div>
            </FunctionUser>
        </>
    );
}

export default FunctionContext;