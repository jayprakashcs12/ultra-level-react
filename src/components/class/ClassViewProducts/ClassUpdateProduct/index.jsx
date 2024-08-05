import React, { Component } from 'react'

export default class ClassUpdateProduct extends Component {

    componentDidMount() {
        document.title = "Class Update Product";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Class Update Product </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}