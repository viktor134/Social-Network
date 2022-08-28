import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <div className={s.item}>
               <img src= "https://pbs.twimg.com/media/DSJx9faU8AABmrb.jpg"/>
                    post 1
            </div>
            <div className='item'>
                post 1
            </div>
            <div className='item'>
                post 2
            </div>
            <div className='item'>
                post 3
            </div>
        </div>
        </div>
    )
        ;

}

export default MyPosts;
