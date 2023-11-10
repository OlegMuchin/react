import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar({navBar,exit,...props}) {
    return (
        <div className='navBar'>
            <div>
                {navBar.map((nav, index) =>(
                <NavLink to = {nav.to} key={index}>
                    <i class={nav.icon}/> {nav.text}
                </NavLink>
            ))}
            </div>
            <NavLink to = {exit.to} className='exit'><i class={exit.icon}/> {exit.text}</NavLink>
        </div>
    );
}

export default NavBar;