import s from './Posts.module.css';
import React from 'react';

const Posts = (props) => {

 
    return (



        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/DSJx9faU8AABmrb.jpg" />
           {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>


    )

}

export default Posts;
   

