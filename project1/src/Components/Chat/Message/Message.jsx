import React from 'react';
import "./Message.css"
import ProfilePicture from "../../UI/ProfilePicture/ProfilePicture"
import { useState } from 'react';
import Messages from './Messages/Messages';

function Message({chats,...props}) {
    let [chat,setChat] = useState(chats);
    let [newMessages,setNewMessages] = useState("");
    function newMessage() {
        if (newMessages) {
            const message = {
                user: chat.nick,
                time: Date.now(),
                text: newMessages,
            }
            setChat({...chat, message:[...chat.message,message]})
        }
    }
    return (
        <div className='Message'>
            <div className="headMessage">
                <div className='UserMessage'>
                    <ProfilePicture picture={"https://wotpack.ru/wp-content/uploads/2023/05/Vubbabu-220x220.png.webp"}/>
                    <div>
                        <label>{chat.nick}</label>
                        <label></label>
                    </div>
                </div>
                <button><i class="fa fa-paperclip"/></button>
                <button><i class="fa fa-ellipsis-v"/></button>
            </div>
            <Messages messages = {chat.message}/>
            <div className='typeMessages'>
                <select className='addFiles'>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <input onChange={e => setNewMessages(e.target.value)} placeholder="Type a message here"></input>
                <button onClick={newMessage}><i class="fa fa-paper-plane-o"/></button>
            </div>
        </div>
    );
}

export default Message;