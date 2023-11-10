import React, {useState, useEffect } from 'react';
import "./PushButton.css"

function PushButton({text, ...props}) {
    const [PushApplication,setPushApplication] = useState(false)
    useEffect(()=>{
        const queryPushApplication_background = document.querySelector(".PushApplication_background")
        const queryPushApplication = document.querySelector(".PushApplication")
        const queryPushButton = document.querySelector(".PushButton")
        queryPushButton.addEventListener("click",()=>{
            document.querySelector("#body").overflowY = "hidden"

            queryPushApplication_background.style.backgroundColor = "darkgray"
            queryPushApplication_background.style.position = "absolute"
            queryPushApplication_background.style.width = 1519.2+"px"
            queryPushApplication_background.style.height = 810+"px"
            queryPushApplication_background.style.top = window.scrollY+"px"
            queryPushApplication_background.style.justifyContent = "center"
            queryPushApplication_background.style.alignItems = "center"

            queryPushApplication.style.backgroundColor = "#FFFDF5"
            queryPushApplication.style.width = 1438+"px"
            queryPushApplication.style.height = 434+"px"
            queryPushApplication.style.display = "flex"
            queryPushApplication.style.justifyContent = "center"
            queryPushApplication.style.alignItems = "center"
            setPushApplication(true)
        })
        if (PushApplication) {
            queryPushApplication_background.style.display = "flex"
        }else{
            queryPushApplication_background.style.display = "none"
        }
    })
    return (
        <button className='PushButton'>
            {text}
            <div className='arrow'></div>
        </button>
    );
}

export default PushButton;