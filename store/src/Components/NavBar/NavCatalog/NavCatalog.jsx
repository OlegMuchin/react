import React from 'react';
import "./NavCatalog.css"
import Picture from "../../UI/Picture/Picture"

function NavCatalog({id, ...props}) {
    return (
        <div className='NavCatalog' id = {id}>
            <Picture src="./img/photo/LogoNeon.png"/>
            <div className='listCatalog'>
                <label >Женщинам</label>
            </div>
        </div>
    );
}

export default NavCatalog;