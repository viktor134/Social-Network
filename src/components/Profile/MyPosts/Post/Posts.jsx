import s from './Posts.module.css';

const Posts = (props) => {
    
    return (



        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/DSJx9faU8AABmrb.jpg" />
           {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>


    )

}

export default Posts;
   