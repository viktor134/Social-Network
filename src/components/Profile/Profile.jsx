import  s from './Profile.module.css';
import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
    <div>

        <img src ='assets/profile/prof.jfif' alt=''/>

        <div>
            ava + description
        </div>
     <MyPosts />

    </div>
    );
}


export default Profile;



