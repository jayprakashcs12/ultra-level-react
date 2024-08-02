import React, { Component } from 'react';
import ClassContent from './ClassContent';
import ClassUser from './ClassContextApi';

export default class ClassContext extends Component {

    render() {

        return (
            <>
                <ClassUser>
                    <div className="pro-div context-div">
                        <ClassContent />
                    </div>
                </ClassUser>
            </>
        );
    }
}