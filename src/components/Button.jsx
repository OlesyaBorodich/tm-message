import React from 'react';

class Button extends React.Component {
    render() {
        return <div>
            <button onClick={this.buttonClick}>Я кнопка</button>
        </div>
    }
}
export default Button