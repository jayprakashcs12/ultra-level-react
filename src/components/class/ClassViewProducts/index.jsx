import React, { Component } from 'react'

export default class ClassViewProducts extends Component {

    componentDidMount() {
        document.title = "Class View Products";
    }

    render() {

        return (

            <>
                <h1 className='pro-head'> Class View Products </h1>
                <div className="pro-div view-products-div">

                </div>
            </>
        )
    }
}