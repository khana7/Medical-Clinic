import React from 'react'
import 'animate.css';
import { NavLink } from 'react-router-dom';
import Login from '../components/Login';
const Home = ({setIsShow, isShow}) => {
  
  return (
    
    <div className="home ">
    <div className='container'>
  
        <div className='home__wrapper'>
 
        <div className="first-col">
          <NavLink to="/personal" className="home__col1 animate__animated animate__slideInLeft">
          <div><p className='home__subtitle '>Наши специалисты</p> <p className='home__desc'>Выберите нужного вам специалиста. Здесь вы найдете лучших врачей.</p></div>
          </NavLink>

          <NavLink to="/personal" className="home__col2 animate__animated animate__slideInLeft">
          <div><p className='home__subtitle'>Запись</p> <p className='home__desc'>Теперь что бы записаться на прием к врачу, не нужно стоять в киллометровых очередях.</p></div>
          </NavLink>

          <NavLink className="home__col3 animate__animated animate__slideInLeft" to="/footer">
          <div><p className='home__subtitle'>Контакты</p> <p className='home__desc'>С нами можно связатся всеми удобными способами</p></div>
          </NavLink>

          <NavLink className="home__col4 home__col4 animate__animated animate__slideInLeft" to="/about">
          <div><p className='home__subtitle'>Подробнее об услуге</p> <p className='home__desc'>Узнайте подробнее как работает онлайн запись.</p></div>
          </NavLink>

          <div className="home__col5 animate__animated animate__slideInLeft"><p className='home__subtitle'>Категории</p> <p className='home__desc'>Выберите нужного вам врача в своем городе</p></div>

          <NavLink className="home__col6 home__col6 animate__animated animate__slideInLeft" to="/categories">
          <div><p className='home__subtitle'>Дети</p> <p className='home__desc'>Удобный поиск нужных вам специалистов</p></div>
          </NavLink>
        </div>
    </div>
  </div>
  
</div>

  )
}

export default Home