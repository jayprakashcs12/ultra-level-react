import React, { Component } from 'react';
import ClassProducts from './ClassProducts';

export default class ClassProps extends Component {

    componentDidMount() {
        document.title = "Class Props";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'>Class Props Details</h1>
                <ClassProducts />
            </>
        )
    }
}