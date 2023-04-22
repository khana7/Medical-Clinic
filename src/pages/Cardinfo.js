import React from 'react'

const Cardinfo = () => {
  return (
     <div className="container">
      <div className="card d-grid z-10 mt-20">
        <div className="grid__item item-1">
          <div className="item__image">
            <img
              src="https://thumb.tildacdn.com/stor6265-6162-4636-b632-373733396231/-/format/webp/28749091.jpg"
              alt="doctor"
            />
          </div>
        </div>
        <div className="grid__item item-2">
          <div className="doctor__wrapper">
            <div className="doctor__info">
              <div className="doctor__name">
                <h1>Дорохина Яна Олеговна</h1>
              </div>
              <div className="doctor__special">
                <p>Гематолог (дети, взрослые)</p>
              </div>
              <div className="doctor__sku">
                SKU: Дорохина Я. О. текстовый ответ на вопрос
              </div>
              <div className="doctor__price">
                <h2>4 500р.</h2>
              </div>
              <div className="doctor__possible_answer">
                <p>Вариант ответа</p>
                <select className="select" name="" id="">
                  <option value="">Текстовый</option>
                  <option value="">Аудио</option>
                  <option value="">Видео</option>
                </select>
              </div>
              <div className="doctor__appeal">
                <p>Обращение</p>
                <select className="select" name="" id="">
                  <option value="">Первичное</option>
                  <option value="">Повторное</option>
                </select>
              </div>
              <div className="doctor__btn">
                <button>Оплатить</button>
              </div>
              <div className="doctor__popular__questions">
                <h3>Популярные вопросы, на которые отвечает специалист:</h3>
                <ul className="doctor__popular__questions-ul">
                  <li>Анемии</li>
                  <li>Нарушение свёртывания крови (кровотечения, тромбозы)</li>
                  <li>
                    Акушерская гематология и гемостазиология (изменение системы
                    крови во время беременности)
                  </li>
                  <li>Изменения в данных ОАК, коагулограммы</li>
                  <li>Прочие вопросы, касающиеся системы крови</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid__item item-3">
          <input type="date" />
        </div>
        <div className="grid__item item-4">
          <div className="schedule">
            <h3>Дни и время работы на сайте:</h3>
            <p>пн - пт 09.00 - 21.00</p>
          </div>
          <div className="response__time">
            <h3>Время подготовки ответа:</h3>
            <p>от 1 до 24 часов</p>
            <p className="response__time_desc">
              Вас подключат к чату со специалистом, доступном в мобильном
              приложении Docma или по адресу chat.docma.ru Там вы зададите
              развёрнутые вопросы, прикрепите необходимые документы (фото,
              видео, выписки из документов, результаты исследований и др.).
            </p>
            <a href="#">Перейти в профиль</a>
            <p className="response__time_spec">Специальность: Гематолог</p>
            <p className="response__time_spec-2">Детский/взрослый: Взрослый</p>
            <p>Детский/взрослый: Детский</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardinfo