import React from 'react';
import Button from "./Button";
import Input from "./Input";
import Counter from "./Counter";
import Names from "./Names";
class Greeting extends React.Component {
    state = {
        inputValue: '',
        counter: 0,
        allNames:[]
    }
    inputChange = (event) => {
        let value = event.currentTarget.value
        this.setState({
            inputValue: value
        })
    };

    buttonClick = () => {
        alert('Привет,' + this.state.inputValue);
        let newName = this.state.inputValue;
        let newUser = {
            name: newName
        };

        this.setState({
            counter: this.state.counter + 1,
            inputValue: '',
            allNames: [...this.state.allNames, newUser]
        })
    }
    render() {
        return (
        <div>
            <Button buttonClick={this.buttonClick}/>
            <Input inputChange={this.inputChange} inputValue={this.state.inputValue}/>
            <Counter counter={this.state.counter}/>
            <Names allNames={this.state.allNames}/>
        </div>
        )
    }
}
export default Greeting