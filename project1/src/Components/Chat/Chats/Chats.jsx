import React, { useState } from 'react';
import BlockChat from './BlockChat/BlockChat';
import filterArray from "../../../Modules/filterArray.js"
import "./Chats.css"

function Chats({chats,...props}) {
    let [chatsUsers, setChats] = useState(chats)
    let [search,setSearch] = useState("")
    const addNewChat = (e)=>{
        let nick = prompt()
        if (nick){
            const newChat = {
                picture: "https://wotpack.ru/wp-content/uploads/2023/05/Ditin-220x220.png.webp",
                nick: nick,
                message:[
                    {
                        user: nick,
                        time: Date.now(),
                        text:"",
                    }
                ]
            }
            setChats([...chatsUsers, newChat]) 
        }   
    }
    return (
        <div className='Chats'>
            <div>
                <div className='titleChat'>
                    <p>Chats</p>
                    <button onClick={addNewChat}>+ Create New Chat</button>
                </div>
                <input onChange={e => setSearch(e.target.value)} className='searchChat' placeholder="Search"></input>
            </div>
            <BlockChat chats = {filterArray(chatsUsers, "nick", search)} />
        </div>
    );
}

export default Chats;