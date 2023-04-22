import React from 'react'

const About = () => {
    return (
        <div className='about'>
        <div className='container'>
            <h2 className='about__title'>Как работает онлайн запись</h2>
            <div className='about__wrapper'>
                <div className='about__card'>
                    <i class="fas fa-sms about__card-logos"></i>
                    <p className='about__card-desc'>Вы оставляете заявку, оплачиваете услугу, вам присылают инструкцию по подключению к чату, вы задаете вопрос специалисту</p>
                </div>
                <div className='about__card '>
                    <i class="fa-solid fa-clock about__card-logos"></i>                    
                    <p className='about__card-desc'>Врач получает Ваш вопрос и готовит ответ в выбранном формате</p>
                </div>

                <div className='about__card '>
                <i class="fa-solid fa-envelope  about__card-logos"></i>
                <p className='about__card-desc'>Вы ведёте диалог со специалистом в чате до получения полного ответа по вашему запросу. Вы сможете добавить в обращение дополнительные материалы (фото и видео)</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About