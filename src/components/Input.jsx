import React from 'react';

class Input extends React.Component {

    render() {
        return <div> <button onClick={this.buttonClick}>Я кнопка</button>
            <input onChange={this.inputChange} type='text' placeholder='Введи имя' value={this.state.inputValue}/>
        </div>
    }
}
export default Input