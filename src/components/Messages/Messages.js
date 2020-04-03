import React from 'react';
import s from './Messages.module.css'

const Massage = (props) => {
    return (
        <div className={s.ramka}>
            <img src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'/>
            <div className={s.massage}>
                <b className={s.name}>Borodich Olesya</b>
                <span className={s.time}>22:07</span>
                <span className={s.sms}>Привет,как дела?</span>
            </div>
        </div>
    )
}

export default Massage;
