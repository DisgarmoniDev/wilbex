import './app.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainPage } from './page/MainPage';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
