import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Arsen
                </div>
            

            <div className={s.dialog} >
                Karina
            </div>
            </div>

            <div className='messages'>
                <div className="message">Hi</div>
                <div className="message">How Are you</div>
                <div className="message">You</div>

            </div>

        </div>
    )
}


export default Dialogs;


