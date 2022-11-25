import { svg } from '../svg/svg'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerNav">
        <div className="footerNav__company">
          <p className="footerNav__company-title">О компании</p>
          <div className="footerNav__company-list">
            <a href="" className="navLink">Партнёрская программа</a>
            <a href="" className="navLink">Вакансии</a>
          </div>
        </div>
        <div className="footerNav__menu">
          <p className="footerNav__menu-title">Меню</p>
          <div className="footerNav__menu-list">
            <a href="" className="navLink">Расчёт стоимости</a>
            <a href="" className="navLink">Кейсы</a>
            <a href="" className="navLink">Услуги</a>
            <a href="" className="navLink">Благодарственные письма</a>
            <a href="" className="navLink">Виджеты</a>
            <a href="" className="navLink">Сертификаты</a>
            <a href="" className="navLink">Интеграции</a>
            <a href="" className="navLink">Блог на Youtube</a>
            <a href="" className="navLink">Наши клиенты</a>
            <a href="" className="navLink">Вопрос / Ответ</a>
          </div>
          <div className="footerNav__menu-mob">
            <a href="" className="navLink">Расчёт стоимости</a>
            <a href="" className="navLink">Благодарность клиентов</a>
            <a href="" className="navLink">Услуги</a>
            <a href="" className="navLink">Кейсы</a>
            <a href="" className="navLink">Виджеты</a>
            <a href="" className="navLink">Сертификаты</a>
            <a href="" className="navLink">Интеграции</a>
            <a href="" className="navLink">Блог на Youtube</a>
            <a href="" className="navLink">Наши клиенты</a>
            <a href="" className="navLink">Вопрос / Ответ</a>
          </div>
        </div>
        <div className="footerNav__contacts">
          <p className="footerNav__contacts-title">Контакты</p>
          <div className="footerNav__contacts-list">
            <a href="tel:+7 555 555-55-55" className="phone">+7 555 555-55-55</a>
            <div className="messengers">
              <a href="" className="messengers-icon">
                {svg.telegram}
              </a>
              <a href="" className="messengers-icon">
                {svg.viber}
              </a>
              <a href="" className="messengers-icon">
                {svg.whatsapp}
              </a>
            </div>
            <div className="address">Москва, Путевой проезд 3с1, к 902</div>
          </div>
        </div>
      </div>

      <div className="privacyPolicy">
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="">Политика конфиденциальности</a>
      </div>

    </footer>
  )
}
