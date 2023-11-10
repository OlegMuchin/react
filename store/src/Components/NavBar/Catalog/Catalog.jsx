import React from 'react';
import "./Catalog.css"
import Picture from "../../UI/Picture/Picture"

function Catalog({id, ...props}) {
    return (
        <div className='Catalog' id = {id}>
            <Picture src="./img/photo/LogoNeon.png"/>
            <div className='listCatalog'>
                <label >Женщинам</label>
            </div>
        </div>
    );
}

export default Catalog;