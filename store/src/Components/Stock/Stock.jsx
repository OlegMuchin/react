import React from 'react';
import "./Stock.css"
import Picture from "../UI/Picture/Picture"
import Stars from '../UI/Stars/Stars';
import MoreDetailsButton from '../UI/button/MoreDetailsButton/MoreDetailsButton';

function Stock(props) {
    let products = [
        {
            photo:"./img/photo/Rectangle_23.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:true,
            stars:2,
        },
        {
            photo:"./img/photo/Rectangle_24.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:false,
            stars:3,
        },
        {
            photo:"./img/photo/Rectangle_25.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:true,
            stars:4,
        },
        {
            photo:"./img/photo/Rectangle_26.png",
            priceNow:50,
            price:65,
            text:"Блузка женская классная",
            like:false,
            stars:5,
        },
    ]
    return (
        <section className='Stock'>
            <div className='title'>
                <label className='title1'>Успей купить!</label>
                <label className='title2'>Акции</label>
            </div>
            <div className='productsStock'>
                {products.map((product, index)=>(
                    <div key={index} className='productStock'>
                        <Picture src={product.photo}/>
                        <div>
                            <label>
                                <span>{product.priceNow}</span>
                                <span>{product.price}</span><br/>
                                <span>{product.text}</span>
                            </label>
                            <Picture imgId="heart" src={product.like? "./img/icons/Heart_red.svg.png":"./img/icons/clarity_heart-line.svg"}/>
                            <Picture src="./img/icons/clarity_shopping-bag-line.svg"/>
                            <MoreDetailsButton text="Подробнее"/>
                            <Stars amoutStars={product.stars}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stock;