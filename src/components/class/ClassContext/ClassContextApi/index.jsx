import React, { Component, createContext } from "react";
import { toast } from 'react-toastify';

export const CreateContextApi = createContext();

let { Provider } = CreateContextApi;

export default class ClassUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0, user: "Class"
        };
        this.minCount = 0; this.maxCount = 10; this.item = "Counter";
    };

    handleDecrement = () => {

        let { count } = this.state;

        if (count > this.minCount) {
            this.setState({ count: count - 1 });
            toast.info(`You have ${count - 1} ${count - 1 < 2 ? this.item : this.item + "s"}...!`, { autoClose: 750 });
        } else {
            toast.warn(`You can't select less than ${this.minCount} ${this.minCount < 1 ? this.item : this.item + "s"}...!`, { autoClose: 750 });
        }
    };

    handleIncrement = () => {

        let { count } = this.state;

        if (count < this.maxCount) {
            this.setState({ count: count + 1 });
            toast.success(`You have ${count + 1} ${count + 1 === 1 ? this.item : this.item + "s"}...!`, { autoClose: 750 });
        } else {
            toast.warn(`You can't select more than ${this.maxCount} ${this.maxCount === 1 ? this.item : this.item + "s"}...!`, { autoClose: 750 });
        }
    };

    handleReset = () => {
        this.setState({ count: this.minCount });
        toast.warn(`You have ${this.minCount} ${this.item}...!`, { autoClose: 750 });
    };

    render() {

        let { count } = this.state, { handleIncrement, handleDecrement, handleReset } = this;

        return (
            <>
                <h1 className='pro-head'> Class Counter Applications </h1>
                <Provider value={{ count, handleIncrement, handleDecrement, handleReset }}>
                    {this.props.children}
                </Provider>
            </>
        );
    }
}