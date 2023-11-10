import React from 'react';
import ProfilePicture from '../../../UI/ProfilePicture/ProfilePicture';
import "./BlockChat.css"
import { useSearchParams } from "react-router-dom"

function BlockChat({chats,...props}) {
    const [searchParams,setSearchParams] = useSearchParams({nick: "b"})
    const num = searchParams.get("nick")
    console.log(num);
    return (
        <div className='BlocksChat' onClick={e => console.log(e.target)}>
            {chats.map((chat, index) =>(
                <div className='BlockChat'>
                    <ProfilePicture picture = {chat.picture} />
                    <label>{chat.nick}</label>
                    <label>{chat.message[chat.message.length-1].time}</label>
                    <p>{chat.message[chat.message.length-1].text}</p>
                </div>
            ))}
        </div>
    );
}

export default BlockChat;