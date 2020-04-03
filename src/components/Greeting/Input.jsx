import React from 'react';

class Input extends React.Component {

    render() {
        return <div>
            <input onChange={this.props.inputChange} type='text' placeholder='Введи имя' value={this.props.inputValue}/>
        </div>
    }
}
export default Input