import  s  from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className={`${s.item} ${s.body}`}>
                <NavLink to ='./profile'  className = { navData => navData.isActive ? s.activeLink:s.item } > Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'   className = { navData => navData.isActive ? s.activeLink:s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>News</NavLink> 
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