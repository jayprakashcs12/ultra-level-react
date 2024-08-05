import React, { Component } from 'react';
import ClassHOC01 from './ClassHOC01';
import ClassHOC02 from './ClassHOC02';

export default class ClassHOC extends Component {

    componentDidMount() {
        document.title = "Class HOC";
    }

    render() {

        return (
            
            <>
                <h1 className='pro-head'> Class HOC </h1>
                <div className="pro-div hoc-div">
                    <ClassHOC01 />
                    <ClassHOC02 />
                </div>
            </>
        )
    }
}