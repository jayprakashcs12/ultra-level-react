import React, { Component } from 'react'

export default class FunctionViewProducts extends Component {

    componentDidMount() {
        document.title = "Function View Products";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Function View Products </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}