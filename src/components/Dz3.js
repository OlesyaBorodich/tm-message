import React from 'react';

class Dz3 extends React.Component {
    state = {
        inputValue: '',
        a: 0,
        allNames:[]
    }
    inputChange = (event) => {
        let value = event.currentTarget.value
        //let newName = value;
       // this.state.allNames.push(newName);
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
            a: this.state.a + 1,
            inputValue: '',
            allNames: [...this.state.allNames, newUser]
        })
    }
    render() {
        let  newNames = this.state.allNames.map((name,index) =>{return {...name, key:index}});
        debugger
        console.log({newNames});
        debugger;
         let nameSpan =  newNames.length !== 0 && newNames.map((el, i) =>  <span key={i}>{el.name}</span>)


        return (
        <div>
            <button onClick={this.buttonClick}>Я кнопка</button>
            <input onChange={this.inputChange} type='text' placeholder='Введи имя' value={this.state.inputValue}/>
            <span>{this.state.a}</span>
            <span>{nameSpan}</span>

        </div>
        )
    }
}
export default Dz3