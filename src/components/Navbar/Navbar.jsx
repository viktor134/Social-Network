import  s  from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className={`${s.item} ${s.body}`}>
                <a> Profile </a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}



export default Navbar;