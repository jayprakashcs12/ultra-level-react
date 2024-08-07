import React, { Component } from 'react';
import ClassHOC01 from './ClassHOC01';

class ClassHOC extends Component {

    componentDidMount() {
        document.title = "Class HOC";
    }

    render() {

        return (
            <>
                <h1 className='pro-head'>Class HOC</h1>
                <ClassHOC01 />
            </>
        );
    }
}

export default ClassHOC;