import s from '.././Dialogs.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



const Message = (props) => {
    return <div className="message">{props.name}</div>
}




export default Message;


