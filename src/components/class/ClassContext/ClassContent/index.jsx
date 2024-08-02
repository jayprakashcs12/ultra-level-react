import React, { Component } from 'react';
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import { CreateContextApi } from '../ClassContextApi';
import ReactTooltip from 'react-tooltip';

export default class ClassContent extends Component {

    componentDidMount() {
        document.title = "Class Context API";
    }

    render() {
        const { Consumer } = CreateContextApi;

        return (
            <React.Fragment>
                <Consumer>
                    {
                        (val) => (
                            <div className='counter-apps'>
                                <h1 className='pro-head'> Class Counter Applications </h1>
                                <h1 className='pro-head count-head'>{val.count}</h1>
                                <div className="btn-div">
                                    <CiCircleMinus className="pro-btn dec-btn" onClick={val.handleDecrement} data-tip data-for="dereaseCount" />
                                    <ReactTooltip id="dereaseCount" place="bottom" effect="solid"> Decrease the Counter </ReactTooltip>
                                    <CiPower className="pro-btn reset-btn" onClick={val.handleReset} data-tip data-for="resetCount" />
                                    <ReactTooltip id="resetCount" place="bottom" effect="solid"> Reset the Counter </ReactTooltip>
                                    <CiCirclePlus className="pro-btn inc-btn" onClick={val.handleIncrement} data-tip data-for="increaseCount" />
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