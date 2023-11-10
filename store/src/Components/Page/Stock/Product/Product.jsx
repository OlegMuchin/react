import React from 'react';
import Picture from '../../../UI/Picture/Picture';
import MoreDetailsButton from '../../../UI/button/MoreDetailsButton/MoreDetailsButton';
import Stars from '../../../UI/Stars/Stars';

function Product({photo, priceNow, price, text, like, stars, ...props}) {
    return (
        <div className='Product'>
            <Picture src={photo}/>
            <div>
                <label>
                    <span>{priceNow}</span>
                    <span>{price}</span><br/>
                    <span>{text}</span>
                </label>
                <Picture imgId="heart" src={like? "./img/icons/Heart_red.svg.png":"./img/icons/clarity_heart-line.svg"}/>
                <Picture src="./img/icons/clarity_shopping-bag-line.svg"/>
                <MoreDetailsButton text="Подробнее"/>
                <Stars amoutStars={stars}/>
            </div>
        </div>
    );
}

export default Product;