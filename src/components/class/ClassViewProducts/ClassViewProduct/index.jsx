import React, { Component } from 'react'

export default class ClassViewProduct extends Component {

    componentDidMount() {
        document.title = "Class View Product";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Class View Product </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}