import React from 'react';
import s from './Qualities.module.css'

const Qualities = (props) => {
    debugger
    return (
        <div className={props.q === 'позитивная' ? s.frame1:s.frame}>
            {props.q}
        </div>
    )
}

export default Qualities;
