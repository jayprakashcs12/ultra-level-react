import React from 'react'

const FunctionHocMain = (FunctionHoc) => {

    let data = function() {

        return <FunctionHoc value={{uiDeveloper:"Jay Prakash Singh", subjectName1:"HTML", subjectName2:"CSS", subjectName3:"ReactJS", subjectName4:"AngularJS"}} />
    }

    return data;
}

export default FunctionHocMain;