import React, { Component } from 'react'

export default class FunctionViewProduct extends Component {

    componentDidMount() {
        document.title = "Function View Product";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Function View Product </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}