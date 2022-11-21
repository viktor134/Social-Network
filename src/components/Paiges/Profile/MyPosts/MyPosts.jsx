import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import React from 'react';

const MyPosts = (props) => {

    
    let posts =
        props.posts.map(p => <Posts message={p.message} likesCount={p.likeCount} />);

    return (



        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>


                {posts}



            </div>
        </div>



    )



}

export default MyPosts;
