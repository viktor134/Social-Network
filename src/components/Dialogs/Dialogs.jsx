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
    return <div className="message">{props.name}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: "1", name: "Victor" },
        { id: "2", name: "Arsen" },
        { id: "3", name: "Karina" },
        { id: "4", name: "Tanya" },
        { id: "5", name: "Lucy" }

    ];


    let messageData = [
        { id: "1", message: "Hi" },
        { id: "2", message: "You" },
        { id: "3", message: "How are you " }
    ]

    let dialog = dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
    let message = messageData.map(m => <Message name={m.message} />);

    return (


        <div className={s.dialogs}>
            <div className={s.dialogItems}>



                {dialog}

            </div>

            <div className='messages'>
                {message}

            </div>

        </div>
    )
}


export default Dialogs;


