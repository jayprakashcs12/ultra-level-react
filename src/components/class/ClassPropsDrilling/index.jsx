import React, { Component } from 'react';
import ClassGrandParents from './ClassGrandParents';


export default class ClassPropsDrilling extends Component {

    componentDidMount() {
        document.title = "Class Props";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'>Class Props Details</h1>
                <ClassGrandParents />
            </>
        )
    }
}