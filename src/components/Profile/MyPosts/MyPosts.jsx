import s from './MyPosts.module.css';
import Posts from "./Post/Posts";
import React from 'react';

const MyPosts = () => {
    
    let postData = [
        {id:1,message:"Hi ,how are you ?",likeCount:4},
        {id:1,message:"My first Post ? ?",likeCount:5}
        

]
    return (
   

        
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
            
            <Posts message = {postData[0].message} likesCount= "2"/>
            <Posts message = {postData[1].message} likesCount= "5"/ >
            
           

        </div>
        </div>


    );


}

export default MyPosts;
