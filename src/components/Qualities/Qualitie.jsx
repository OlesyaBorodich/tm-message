import React from 'react';
import s from './Qualities.module.css'

const Qualitie = (props) => {
    return (
        <div className={props.q === 'позитивная' ? s.frame1:s.frame}>
            {props.q}
        </div>
    )
}

export default Qualitie;
