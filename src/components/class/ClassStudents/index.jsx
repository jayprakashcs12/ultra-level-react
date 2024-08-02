import React, { Component } from 'react';
import empData from "../../../server/data-base.json"

export default class ClassStudents extends Component {

    constructor(props) {
        super(props);
        this.state = { userData: empData };
    }

    componentDidMount() {
        document.title = "Class Students List";
    }

    render() {
        return (
            <div className="pro-div students-div">
                <h1 className='pro-head'>Students Details</h1>
                <div className="product-div">
                    {this.state.userData.map((x, i) => (
                        <div key={i} className='student-list-div'>
                            <p className='pro-para'> {x.id} </p>
                            <img className='pro-img' src={x.avatar_url} alt={x.avatar_url} />
                            <p className='pro-para'> <b> {x.login} </b> </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}