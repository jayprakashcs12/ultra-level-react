import React, { Component } from 'react'

export default class FunctionAddProduct extends Component {

    componentDidMount() {
        document.title = "Function Add Product";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Function Add Product </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}