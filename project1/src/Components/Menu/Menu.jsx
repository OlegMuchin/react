import React from 'react';
import "./Menu.css";
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';

function Menu({user,menu,...props}) {
    return (
        <div className='Menu'>
            <Profile picture = {user.picture} nick = {user.nick}/>
            <NavBar navBar = {menu.navBar} exit = {menu.exit}/>
        </div>
    );
}

export default Menu;