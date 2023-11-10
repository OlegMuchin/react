import React from 'react';
import "./AboutStore.css"

function AboutStore(props) {
    const arrayAboutStore = [
        {
            location:"up",
            text:"Скидки постоянным клиентам от 5%",
        },
        {
            location:"down",
            text:"Предлагаем самые выгодные цены",
        },
        {
            location:"up",
            text:"Наши покупатели всегда остаются довольны",
        },
        {
            location:"up",
            text:"Ширикий ассортимент товаров для всей семьи",
        },
        {
            location:"down",
            text:"Возможность доставки в любой город Беларуси",
        },
        {
            location:"up",
            text:"Пункты выдачи заказов рядом с домом",
        },
    ]
    return (
        <section className='AboutStore' id='AboutStore'>
            <div className='textAboutStore'>
                <label className='title'>Почему выбирают нас?</label>
                <div className='Causes'>
                    {arrayAboutStore.map((content, index)=>(
                        <label key={index} className={content.location}>{content.text}</label>
                    ))}  
                </div>
            </div>
        </section>
    );
}

export default AboutStore;