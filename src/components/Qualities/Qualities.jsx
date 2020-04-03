import React from 'react';
import s from './Qualities.module.css'
import Qualitie from "./Qualitie";

const Qualities = (props) => {
    let qualities = ['позитивная', 'прямолинейная', 'целеустремленная'];
    const newQualities = qualities.map((q, index)=> <Qualitie  key={index} q={q}/>);
    return (
        <div>
            {newQualities}
        </div>
    )
}

export default Qualities;
