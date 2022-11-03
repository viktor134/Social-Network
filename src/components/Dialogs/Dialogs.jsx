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

    let dialogsData = [
        {id:"1",name:"Victor"},
        {id:"2",name:"Arsen"},
        {id:"3",name:"Karina"},
        {id:"4",name:"Tanya"},
        {id:"5",name:"Lucy"}
    
    ];


    let  messageData = [
        {id:"1",message:"Hi"},
        {id:"2",message:"You"},
        {id:"3",message:"How are you "}
    ]

    return (


        <div className={s.dialogs}>
            <div className={s.dialogItems}>


                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
              
            </div>

            <div className='messages'>
                <Message name = {messageData[0].message}/>
                <Message name = {messageData[1].message}/>
                <Message name = {messageData[2].message}/>
            
            </div>

        </div>
    )
}


export default Dialogs;


