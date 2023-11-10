import React from 'react';
import Icons from './Icons/Icons';
import Picture from "../UI/Picture/Picture"
import "./NavBar.css"
import Catalog from './Catalog/Catalog';

function NavBar({id, ...props}) {
    return (
        <div className='NavBar' id={id}>
            <Catalog/>
            <Picture id = "menu" src='./img/icons/clarity_menu-line.svg'/>
            <Icons id = "icons"/>
        </div>
    );
}

export default NavBar;