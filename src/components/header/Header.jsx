import { NavLink } from 'react-router-dom'
import { svg } from '../svg/svg'

import './header.scss'

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="nav__logo">
          <NavLink to='/'>
            <img src="img/header/logo_welbex.svg" alt="logo" />
          </NavLink>
        </div>
        <ul className='list'>
          <li className='list__links'>
            <NavLink to="nfp" className='list__links-link'>Услуги</NavLink>
          </li>
          <li className='list__links'>
            <NavLink to="nfp" className='list__links-link'>Виджеты</NavLink>
          </li>
          <li className='list__links'>
            <NavLink to="nfp" className='list__links-link'>Интеграции</NavLink>
          </li>
          <li className='list__links'>
            <NavLink to="nfp" className='list__links-link'>Кейсы</NavLink>
          </li>
          <li className='list__links'>
            <NavLink to="nfp" className='list__links-link'>Сертификаты</NavLink>
          </li>
        </ul>
        <div className="contacts">
          <a className='contacts__phone' href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          <div className="contacts__messengers">
            <NavLink to="nfp" className="contacts__messengers-icon">
              {svg.telegram}
            </NavLink>
            <NavLink to="nfp" className="contacts__messengers-icon">
              {svg.viber}
            </NavLink>
            <NavLink to="nfp" className="contacts__messengers-icon">
              {svg.whatsapp}
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="header__info">
        <p>{`крупный интегратор CRM \nв Росcии и ещё 8 странах`}</p>
      </div>
    </header>
  )
}
