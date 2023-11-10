import React from 'react';

function Messages({messages,...props}) {
    if (!messages.length) {
        return (
            <div>Нет сообщений</div>
        )
    }
    return (
        <div className='messages'>
            {messages.map((message, index)=>(
                <div key={index}>{message.text}</div>    
            ))}
        </div>
    );
}

export default Messages;