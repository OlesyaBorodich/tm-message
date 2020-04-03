import React from 'react';

class Names extends React.Component {
    render() {
        let  newNames = this.props.allNames.map((name,index) =>{return {...name, key:index}});
         let nameSpan =  newNames.length !== 0 && newNames.map((el, i) =>  <span key={i}>{el.name}</span>)
        return (
        <div>
            <span>{nameSpan}</span>
        </div>
        )
    }
}
export default Names