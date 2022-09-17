import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import React from 'react';

const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
            </div>
            <Posts message = 'Hi ,how are you ?'/>
            <Posts message = 'My first Post ?'/>
            <Posts like = '5' />
           

        </div>


    );


}

export default MyPosts;
