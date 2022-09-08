import  s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
    <div>

        <img src ='https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2022/01/14172326/netflix.jpg' alt=''/>

        <div>
            ava + description
        </div>
     <MyPosts />

    </div>
    );
}


export default Profile;
