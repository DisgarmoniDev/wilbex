import { svg } from '../components/svg/svg'
import './mainPage.scss'

export const MainPage = () => {
  return (
    <main className='main'>
      <div className="main__tagline">
        <p className='main__tagline-p'>Зарабатывайте больше <span className='customSpan'>с WELBEX</span></p>
        <span className='main__tagline-span'>{`Развиваем и контролируем \nпродажи за вас`}</span>
      </div>
      <div className="main__advice">
        <div className="main__advice-title">
          <p>Вместе с <span className='adviceCustom'>{`бесплатной\n`}</span><span className='adviceCustom1'>{`консультацией`}</span> мы дарим:</p>
        </div>

        <div className="main__advice-list">
          <div className="gift">
            <p className="gift__title">Виджеты</p>
            <p className="gift__description">30 готовых решений</p>
          </div>
          <div className="gift">
            <p className="gift__title">Dashboard</p>
            <p className="gift__description">с показателями вашего бизнеса</p>
          </div>
          <div className="gift">
            <p className="gift__title">Skype Аудит</p>
            <p className="gift__description">отдела продаж и CRM системы</p>
          </div>
          <div className="gift">
            <p className="gift__title">35 дней</p>
            <p className="gift__description">использования CRM</p>
          </div>
        </div>

        <div className="main__advice-mob">
          <div className="gift">
            {svg.line}
            <p className="gift__title">Skype аудит</p>
          </div>
          <div className="gift">
            {svg.line}
            <p className="gift__title">30 виджетов</p>
          </div>
          <div className="gift">
            {svg.line}
            <p className="gift__title">Dashboard</p>
          </div>
          <div className="gift">
            {svg.line}
            <p className="gift__title">Месяц аmoCRM</p>
          </div>
        </div>

        <button className="main__advice-btn">Получить консультацию</button>
      </div>
    </main>
  )
}
