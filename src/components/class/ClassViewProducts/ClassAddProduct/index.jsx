import React, { Component } from 'react'

export default class ClassAddProduct extends Component {

    componentDidMount() {
        document.title = "Class Add Product";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Class Add Product </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}