import React, { Component } from 'react';

const ClassHocMain = (ClassHoc) => {

    return class extends Component {

        render() {
            let data = { uiDeveloper: "Jay Prakash Singh", subjectName1: "HTML", subjectName2: "CSS", subjectName3: "ReactJS", subjectName4: "AngularJS" };
            return <ClassHoc value={data} />;
        }
    };
};

export default ClassHocMain;