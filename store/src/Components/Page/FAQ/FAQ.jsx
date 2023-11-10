import React, { useState } from 'react';
import "./FAQ.css"
import Picture from "../../UI/Picture/Picture"
import TwoTitle from '../../TwoTitle/TwoTitle';

function FAQ(props) {
    let [arrayFAQ,setArrayFAQ] = useState([
        {
            title:"Как сделать заказ?",
            check:false,
            text:"Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
        },
        {
            title:"Способы оплаты",
            check:false,
            text:"q",
        },
        {
            title:"Доставка",
            check:false,
            text:"q",
        },
        {
            title:"Сроки доставки",
            check:false,
            text:"q",
        },
        {
            title:"Как сделать обмен?",
            check:false,
            text:"q",
        },
        {
            title:"Как сделать возврат?",
            check:false,
            text:"q",
        },
        {
            title:"Куда и когда вернутся деньги за возвращённый товар?",
            check:false,
            text:"q",
        },
    ])
    const updateArrayFAQ = (e) => {
        let newArray = arrayFAQ
        newArray[e.target.id].check = !arrayFAQ[e.target.id].check
        setArrayFAQ([...newArray])
        console.log(newArray);
    }
    return (
        <section className='FAQ' id='FAQ'>
            <div className='contentFAQ'>
                <TwoTitle title1="Часто задаваемые вопросы" title2="FAQ"/>
                <div>
                    {arrayFAQ.map((content, index)=>(
                        <div key={index}>
                            <div>
                                <label>{content.title}</label>
                                <button onClick={updateArrayFAQ}><Picture imgId={index} src={content.check?"./img/icons/cross.svg":"./img/icons/plus.svg"}/></button>
                            </div>
                            {content.check && (
                                <div>
                                    <label>{content.text}</label>
                                </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;