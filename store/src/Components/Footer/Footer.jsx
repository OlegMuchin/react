import React from 'react';
import "./Footer.css"
import Picture from "../UI/Picture/Picture"

function Footer(props) {
    const arrayNav = [
        {
            href:"#body",
            text:"Главная",
        },
        {
            href:"",
            text:"Акции",
        },
        {
            href:"",
            text:"Каталог",
        },
        {
            href:"",
            text:"Возврат",
        },
        {
            href:"",
            text:"Доставка",
        },
        {
            href:"#InvitationSuppliers",
            text:"Партнёрам",
        },
        {
            href:"",
            text:"Способы оплаты",
        },
        {
            href:"",
            text:"Как сделать заказ?",
        },
    ]
    return (
        <footer className='Footer'>
            <div className='textFooter'>
                <div>
                    <label>Информация</label>
                    <div>
                        {arrayNav.map((a, index) => (
                            <a key={index} href={a.href}>{a.text}</a>
                        ))}
                    </div>
                </div>
                
                <Picture src="./img/photo/LogoNeon.png"/>
            </div>
        </footer>
    );
}

export default Footer;