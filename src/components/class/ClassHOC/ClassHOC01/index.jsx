import React, { Component } from 'react';
import ClassHocMain from '../ClassHocMain';

class ClassHOC01 extends Component {

    render() {

        let { travellerName, origin, destination, trainName } = this.props.value;

        return (
            <>
                <h1 className='sub-head'>
                    {travellerName} travelled from {origin} to {destination} by {trainName}
                </h1>
            </>
        );
    }
}

export default ClassHocMain(ClassHOC01);