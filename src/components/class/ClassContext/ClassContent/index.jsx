import React, { Component } from 'react';
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import contentImg from "../../../../assets/img/background/counter-strike-01.png";
import { CreateContextApi } from '../ClassContextApi';
import ReactTooltip from 'react-tooltip';

export default class ClassContent extends Component {

    componentDidMount() {
        document.title = "Class Context API";
    }

    render() {

        let { Consumer } = CreateContextApi;

        return (
            <React.Fragment>
                <Consumer>
                    {
                        (val) => (
                            <div className='counter-apps'>
                                <h1 className='pro-head count-head'>{val.count}</h1>
                                <img src={contentImg} alt={contentImg} className='content-img' />
                                <div className="btn-div">
                                    <CiCircleMinus size={35} className="pro-btn dec-btn" onClick={val.handleDecrement} data-tip data-for="dereaseCount" />
                                    <ReactTooltip id="dereaseCount" place="bottom" effect="solid"> Decrease the Counter </ReactTooltip>
                                    <CiPower size={35} className="pro-btn reset-btn" onClick={val.handleReset} data-tip data-for="resetCount" />
                                    <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Counter </ReactTooltip>
                                    <CiCirclePlus size={35} className="pro-btn inc-btn" onClick={val.handleIncrement} data-tip data-for="increaseCount" />
                                    <ReactTooltip id="increaseCount" place="bottom" effect="solid"> Increase the Counter </ReactTooltip>
                                </div>       
                            </div>
                        )
                    }
                </Consumer>
            </React.Fragment>
        );
    }
}