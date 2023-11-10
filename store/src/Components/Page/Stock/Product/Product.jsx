import React from 'react';
import Picture from '../../../UI/Picture/Picture';
import MoreDetailsButton from '../../../UI/button/MoreDetailsButton/MoreDetailsButton';
import Stars from '../../../UI/Stars/Stars';
import "./Product.css"

function Product({photo, priceNow, price, text, like, stars, ...props}) {
    return (
        <div className='Product'>
            <Picture src={photo}/>
            <div className='Product_content'>
                <div>
                    <label>
                        <span className='priceNow'>{priceNow}</span>
                        <span className='price'>{price}</span><br/>
                        {text}
                    </label>
                    <Picture imgId="heart" src={like? "./img/icons/Heart_red.svg.png":"./img/icons/clarity_heart-line.svg"}/>
                    <Picture imgId="bag" src="./img/icons/clarity_shopping-bag-line.svg"/>
                </div>
                <MoreDetailsButton text="Подробнее"/>
                <Stars amoutStars={stars}/>
            </div>
        </div>
    );
}

export default Product;