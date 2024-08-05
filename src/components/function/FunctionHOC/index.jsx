import React, { Component } from 'react';
import FunctionHOC01 from './FunctionHOC01';
import FunctionHOC02 from './FunctionHOC02';

export default class FunctionHOC extends Component {

    componentDidMount() {
        document.title = "Function HOC";
    }

    render() {

        return (
            
            <>
                <h1 className='pro-head'> Function HOC </h1>
                <div className="pro-div hoc-div">
                    <FunctionHOC01 />
                    <FunctionHOC02 />
                </div>
            </>
        )
    }
}