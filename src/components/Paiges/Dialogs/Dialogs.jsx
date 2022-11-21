import s from './Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message name={m.message} />);

    return (


        <div className={s.dialogs}>
            <div className={s.dialogItems}>



                {dialogsElements}

            </div>

            <div className='messages'>
                {messagesElements}

            </div>

        </div>
    )
}


export default Dialogs;


