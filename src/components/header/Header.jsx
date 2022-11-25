import './header.scss'

import { svg } from '../svg/svg'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="nav__logo">
          <img src="img/header/logo_welbex.svg" alt="logo" />
        </div>
        <ul className='list'>
          <li className='list__links'>
            <a href="" className='list__links-link'>Услуги</a>
          </li>
          <li className='list__links'>
            <a href="" className='list__links-link'>Виджеты</a>
          </li>
          <li className='list__links'>
            <a href="" className='list__links-link'>Интеграции</a>
          </li>
          <li className='list__links'>
            <a href="" className='list__links-link'>Кейсы</a>
          </li>
          <li className='list__links'>
            <a href="" className='list__links-link'>Сертификаты</a>
          </li>
        </ul>
        <div className="contacts">
          <a className='contacts__phone' href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          <div className="contacts__messengers">
            <a href="" className="contacts__messengers-icon">
              {svg.telegram}
            </a>
            <a href="" className="contacts__messengers-icon">
              {svg.viber}
            </a>
            <a href="" className="contacts__messengers-icon">
              {svg.whatsapp}
            </a>
          </div>
        </div>
      </nav>

      <div className="header__info">
        <p>{`крупный интегратор CRM \nв Росcии и ещё 8 странах`}</p>
      </div>
    </header>
  )
}
