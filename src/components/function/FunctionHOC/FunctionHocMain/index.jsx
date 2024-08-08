import React from 'react'

const FunctionHocMain = (FunctionHoc) => {

    let data = function() {

        return <FunctionHoc value={{uiDeveloper:"Jay Prakash Singh", subject1:"HTML", subject2:"CSS", subject3:"ReactJS", subject4:"AngularJS"}} />
    }

    return data;
}

export default FunctionHocMain;