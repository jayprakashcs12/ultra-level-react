import React, { Component } from 'react';
import ClassHocMain from '../ClassHocMain';

class ClassHOC01 extends Component {

    render() {

        let { travellerName, origin, destination, trainName } = this.props.value;

        return (
            <>
                <div className="hoc-main hoc01-div">
                    <h1 className='sub-head'> {travellerName} {origin} {destination} {trainName} </h1>
                </div>
            </>
        );
    }
}

export default ClassHocMain(ClassHOC01);