import React, { useContext, useEffect } from 'react';
import contentImg from "../../../../assets/img/background/counter-strike-02.png";
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import { CreateContextApi } from '../FunctionContextApi';
import ReactTooltip from 'react-tooltip';

const FunctionContent = () => {

    let context = useContext(CreateContextApi);

    useEffect(() => {
        document.title = "Function Context API";
    }, []);

    return (
        <>
            <div className='counter-apps'>
                <h1 className='pro-head count-head'> {context.count} </h1>
                <img src={contentImg} alt={contentImg} className='content-img' />
                <div className="btn-div">
                    <CiCircleMinus size={35} className="pro-btn dec-btn" onClick={context.handleDecrement} data-tip data-for="dereaseCount" />
                    <ReactTooltip id="dereaseCount" place="bottom" effect="solid"> Decrease the Counter </ReactTooltip>
                    <CiPower size={35} className="pro-btn reset-btn" onClick={context.handleReset} data-tip data-for="resetCount" />
                    <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Counter </ReactTooltip>
                    <CiCirclePlus size={35} className="pro-btn inc-btn" onClick={context.handleIncrement} data-tip data-for="increaseCount" />
                    <ReactTooltip id="increaseCount" place="bottom" effect="solid"> Increase the Counter </ReactTooltip>
                </div>
            </div>
        </>
    );
};

export default FunctionContent;