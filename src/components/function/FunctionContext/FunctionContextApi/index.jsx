import React, { useState, createContext } from "react";
import { toast } from 'react-toastify';

export const CreateContextApi = createContext();

let { Provider } = CreateContextApi;

const FunctionUser = ({ children }) => {

    let [count, setCount] = useState(0),
    minCount = 0, maxCount = 10, item = "Counter",

    handleDecrement = () => {

        if (count > minCount) {
            setCount(count - 1);
            toast.info(`You have ${count - 1} ${count - 1 < 2 ? item : item + "s"}...!`, { autoClose: 750 });
        } else {
            toast.warn(`You can't select less than ${minCount} ${minCount < 1 ? item : item + "s"}...!`, { autoClose: 750 });
        }
    },

    handleIncrement = () => {

        if (count < maxCount) {
            setCount(count + 1);
            toast.success(`You have ${count + 1} ${count + 1 === 1 ? item : item + "s"}...!`, { autoClose: 750 });
        } else {
            toast.warn(`You can't select more than ${maxCount} ${maxCount === 1 ? item : item + "s"}...!`, { autoClose: 750 });
        }
    },

    handleReset = () => {
        setCount(minCount);
        toast.warn(`You have ${minCount} ${item}...!`, { autoClose: 750 });
    };

    return (
        <>
            <h1 className='pro-head count-head'> Function Counter Applications </h1>
            <Provider value={{ count, handleIncrement, handleDecrement, handleReset }}>
                {children}
            </Provider>
        </>
    );
};

export default FunctionUser;
