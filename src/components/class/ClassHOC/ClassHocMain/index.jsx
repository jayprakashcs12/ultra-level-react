import React, { Component } from 'react';

const ClassHocMain = (ClassHoc) => {

    return class extends Component {

        render() {
            let data = { uiDeveloper: "Jay Prakash Singh", subject1: "HTML", subject2: "CSS", subject3: "ReactJS", subject4: "AngularJS" };
            return <ClassHoc value={data} />;
        }
    };
};

export default ClassHocMain;