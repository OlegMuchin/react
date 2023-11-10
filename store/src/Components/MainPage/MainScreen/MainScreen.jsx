import React,{useState, useEffect} from 'react';
import "./MainScreen.css"
import Picture from "../../UI/Picture/Picture"
import EllipseButton from '../../UI/button/EllipseButton/EllipseButton';
import NavBar from '../../NavBar/NavBar';

function MainScreen({id, ...props}) {
    const [menu,setMenu] = useState(false)
    useEffect(()=>{
        const queryMenu = document.querySelector("#menu")
        const queryCatalog = document.querySelector(".Catalog")
        const querycontentOrCatalog = document.querySelector(".contentOrCatalog")
        const queryContent = document.querySelector(".content")
        const queryNavBar = document.querySelector("#NavBar")
        queryMenu.onclick = ()=>{
            setMenu(true)
        }
        document.body.addEventListener("click",(e)=>{
            let block = queryCatalog.className === e.target.className
            let itsBlock = queryCatalog.contains(e.target)
            let itMenu = queryMenu.className === e.target.className
            let itsMenu = queryMenu.contains(e.target)
            if (!(block || itsBlock || itMenu || itsMenu)) {
                setMenu(false)
            }
        })
        if (menu){
            queryMenu.style.display = "none"
            queryCatalog.style.display = "flex"
            querycontentOrCatalog.style.display = "none"
            queryContent.style.justifyContent = "flex-end"
            queryNavBar.style.justifyContent = "flex-end"
        }
        else{
            queryMenu.style.display = "flex"
            queryCatalog.style.display = "none"
            querycontentOrCatalog.style.display = "flex"
            queryContent.style.justifyContent = "space-between"
            queryNavBar.style.justifyContent = "space-between"
        }
    })
    return (
        <section className='MainScreen' id = {id}>
            <NavBar id="NavBar"/>
            <div className='content'>
                <div className='contentOrCatalog'>
                    <Picture id = "Rectangle_22" src="./img/photo/Rectangle_22.png"/>
                    <label className='title'>Добро пожаловать в<span className="titleName"> Cockteil</span></label>
                    <label className='text'>Экономим Ваше время!<br/>Предлагаем лучшие цены!<br/>Доставляем в кратчайшие сроки!</label>
                </div>
                <Picture id = "Rectangle_21" src="./img/photo/Rectangle_21.png"/>
            </div>
            <EllipseButton id="EllipseButton" text="Каталог"/>
        </section>
    )
}

export default MainScreen;