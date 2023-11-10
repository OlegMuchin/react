import React from 'react';
import "./Chat.css"
import Chats from "./Chats/Chats"
import Message from "./Message/Message"
import filterArray from "../../Modules/filterArray.js"
import {useLocation} from "react-router-dom"

function Chat({chats,...props}) {
    function setMessages(loc) {
        if (loc.includes("/Chat/")) {
            let chatMessages = filterArray(chats,"nick",loc.slice(loc.indexOf("/",1)+1))
            return chatMessages
        }else{
            let chatMessages = {
                picture: "",
                nick: "",
                message: []
        }
        return chatMessages
        }
    }
    console.log(setMessages(useLocation().pathname));  
    
    return (
        <div className='Chat'>
            <Chats chats = {chats}/>
            <Message chats = {setMessages(useLocation().pathname)}/>
        </div>
    );
}

export default Chat;