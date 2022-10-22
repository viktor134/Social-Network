import s from './Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <div className={s.dialog}>
                <NavLink  to ='/dialogs/1' > Victor</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink  to ='/dialogs/2' >   Arsen </NavLink>
                </div>
            

            <div className={s.dialog} >
              <NavLink to = '/dialogs/3'> Karina </NavLink>  
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


