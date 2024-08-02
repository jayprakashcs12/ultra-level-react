import React, { Component } from 'react';
import { CiCircleMinus, CiCirclePlus, CiPower } from "react-icons/ci";
import { CreateContextApi } from '../ClassContextApi';

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
                                <h1 className='pro-head count-head'> Class Counter Applications </h1>
                                <h1 className='pro-head count-head'>{val.count}</h1>
                                <div className="btn-div">
                                    <CiCircleMinus className="ecomm-btn dec-btn" onClick={val.handleDecrement} />
                                    <CiPower className="ecomm-btn reset-btn" onClick={val.handleReset} />
                                    <CiCirclePlus className="ecomm-btn inc-btn" onClick={val.handleIncrement} />
                                </div>
                            </div>
                        )
                    }
                </Consumer>
            </React.Fragment>
        );
    }
}