import { NavLink } from 'react-router-dom'
import { svg } from '../svg/svg'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerNav">
        <div className="footerNav__company">
          <p className="footerNav__company-title">О компании</p>
          <div className="footerNav__company-list">
            <NavLink to="nfp" className="navLink">Партнёрская программа</NavLink>
            <NavLink to="nfp" className="navLink">Вакансии</NavLink>
          </div>
        </div>
        <div className="footerNav__menu">
          <p className="footerNav__menu-title">Меню</p>
          <div className="footerNav__menu-list">
            <NavLink to="nfp" className="navLink">Расчёт стоимости</NavLink>
            <NavLink to="nfp" className="navLink">Кейсы</NavLink>
            <NavLink to="nfp" className="navLink">Услуги</NavLink>
            <NavLink to="nfp" className="navLink">Благодарственные письма</NavLink>
            <NavLink to="nfp" className="navLink">Виджеты</NavLink>
            <NavLink to="nfp" className="navLink">Сертификаты</NavLink>
            <NavLink to="nfp" className="navLink">Интеграции</NavLink>
            <NavLink to="nfp" className="navLink">Блог на Youtube</NavLink>
            <NavLink to="nfp" className="navLink">Наши клиенты</NavLink>
            <NavLink to="nfp" className="navLink">Вопрос / Ответ</NavLink>
          </div>
          <div className="footerNav__menu-mob">
            <NavLink to="nfp" className="navLink">Расчёт стоимости</NavLink>
            <NavLink to="nfp" className="navLink">Благодарность клиентов</NavLink>
            <NavLink to="nfp" className="navLink">Услуги</NavLink>
            <NavLink to="nfp" className="navLink">Кейсы</NavLink>
            <NavLink to="nfp" className="navLink">Виджеты</NavLink>
            <NavLink to="nfp" className="navLink">Сертификаты</NavLink>
            <NavLink to="nfp" className="navLink">Интеграции</NavLink>
            <NavLink to="nfp" className="navLink">Блог на Youtube</NavLink>
            <NavLink to="nfp" className="navLink">Наши клиенты</NavLink>
            <NavLink to="nfp" className="navLink">Вопрос / Ответ</NavLink>
          </div>
        </div>
        <div className="footerNav__contacts">
          <p className="footerNav__contacts-title">Контакты</p>
          <div className="footerNav__contacts-list">
            <a href="tel:+7 555 555-55-55" className="phone">+7 555 555-55-55</a>
            <div className="messengers">
              <NavLink to="nfp" className="messengers-icon">
                {svg.telegram}
              </NavLink>
              <NavLink to="nfp" className="messengers-icon">
                {svg.viber}
              </NavLink>
              <NavLink to="nfp" className="messengers-icon">
                {svg.whatsapp}
              </NavLink>
            </div>
            <div className="address">Москва, Путевой проезд 3с1, к 902</div>
          </div>
        </div>
      </div>

      <div className="privacyPolicy">
        <p>©WELBEX 2022. Все права защищены.</p>
        <NavLink to="nfp">Политика конфиденциальности</NavLink>
      </div>

    </footer>
  )
}
