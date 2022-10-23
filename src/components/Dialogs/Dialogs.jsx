import s from './Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = /dialogs/ + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>


}

const Message = (props) => {
       return  <div className="message">{props.name}</div>
}

const Dialogs = (props) => {
    return (


        <div className={s.dialogs}>
            <div className={s.dialogItems}>


                <DialogsItem name="Victor" id="1" />
                <DialogsItem name="Arsen" id="6" />
                <DialogsItem name="Karina" id="2" />
                <DialogsItem name="Tanya" id="4" />
                <DialogsItem name="Lucy" id="5" />
              
            </div>

            <div className='messages'>
                <Message name = "Hi" />
                <Message name = "How Are you" />
                <Message name = "You" />
            
            </div>

        </div>
    )
}


export default Dialogs;


