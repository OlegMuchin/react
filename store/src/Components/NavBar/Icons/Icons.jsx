import React, {useState, useEffect} from 'react';
import "./Icons.css"
import Picture from "../../UI/Picture/Picture"

function Icons({id, ...props}) {
    const [avatar,setAvatar] = useState(false)
    useEffect(()=>{
        const queryAvatar = document.querySelector("#avatar")
        const queryBlockAvatar = document.querySelector(".blockAvatar")
        queryAvatar.addEventListener("click",()=>{
            setAvatar(true)
        })
        document.body.addEventListener("click",(e)=>{
            let block = queryBlockAvatar.className === e.target.className
            let itsBlock = queryBlockAvatar.contains(e.target)
            let itAvatar = queryAvatar.className === e.target.className
            let itsAvatar = queryAvatar.contains(e.target)
            if (!(block || itsBlock || itAvatar || itsAvatar)) {
                setAvatar(false)
            }
        })
        if (avatar) {
            queryBlockAvatar.style.display = "flex"
        }else{
            queryBlockAvatar.style.display = "none"
        }
    })
    return (
        <div className='Icons' id = {id}>
            <div className='inputSearch'>
                <Picture id = "search" src="./img/icons/clarity_search-line.svg"/>
                <input type='search' placeholder='Поиск'/>
            </div>
            <Picture id = "avatar" src="./img/icons/clarity_avatar-line.svg"/>
            <div className='blockAvatar'>
                <Picture src="./img/icons/noneAvatar.svg"/>
                <button>Войти</button>
                <div>
                    <label><Picture id = "avatar" src="./img/icons/clarity_avatar-line.svg"/>Корзина</label>
                    <label><Picture id = "heart" src="./img/icons/clarity_heart-line.svg"/>Избранное</label>
                    <label><Picture id = "eye" src="./img/icons/eye.svg"/>Просмотренные</label>
                </div>
            </div>
            <Picture id = "heart" src="./img/icons/clarity_heart-line.svg"/>
            <Picture id = "shopping-bag" src="./img/icons/clarity_shopping-bag-line.svg"/>
        </div>
    );
}

export default Icons;