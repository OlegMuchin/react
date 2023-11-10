import React from 'react';

function PushApplication(props) {
    return (
        <div className='PushApplication_background'>
            <div className='PushApplication'>
                <label className='PushApplication_content'>
                    <span>Ваша заявка обрабатывается.</span><br/>
                    <span>Наш специалист с Вами свяжется в ближайшее время</span>
                    <span>Спасибо!</span>
                </label>
            </div>
        </div>
        
    );
}

export default PushApplication;