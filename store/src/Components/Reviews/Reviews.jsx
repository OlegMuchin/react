import React from 'react';
import "./Reviews.css"
import TwoReviews from './TwoReviews/TwoReviews';

function Reviews(props) {
    let arrayReviews = [
        {
            avatar:"./img/icons/Ellipse2_8.svg",
            amoutStars:4,
            text:"Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            nick:"Анна Котлова",
            data:"23.05.2021",
        },
        {
            avatar:"./img/icons/Ellipse1_8.svg",
            amoutStars:2,
            text:"Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.",
            nick:"Анна Котлова",
            data:"23.05.2021",
        },
    ]
    return (
        <section className='Reviews'>
            <div className='textReviews'>
                <label>Отзывы наших покупателей</label>
                <TwoReviews arrayReviews={arrayReviews}/>
                <button></button>
            </div>
        </section>
    );
}

export default Reviews;