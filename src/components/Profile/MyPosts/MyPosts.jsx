import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import React from 'react';

const MyPosts = () => {

    let postData = [
        { id: 1, message: "Hi ,how are you ?", likeCount: 4 },
        { id: 1, message: "My first Post ? ?", likeCount: 5 }


    ]

    let posts = postData.map(p=><Posts message={p.message} likesCount={p.likeCount} />);

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
