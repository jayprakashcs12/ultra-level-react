import React, { Component } from 'react';
import empData from "../../../server/data-base.json"

export default class ClassStudents extends Component {

    constructor(props) {
        super(props);
        this.state = { userData: empData };
    }

    componentDidMount() {
        document.title = "Class Students Lists";
    }

    render() {
        return (
            <>
                <h1 className='pro-head'>Class Students Details</h1>
                <div className="pro-div students-div">
                    <div className="products-div">
                        {this.state.userData.map((x, i) => (
                            <div key={i} className='student-list-div'>
                                <p className='student-para'> {x.id} </p>
                                <img className='pro-img' src={x.avatar_url} alt={x.avatar_url} />
                                <p className='student-para'> <b> {x.login} </b> </p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}