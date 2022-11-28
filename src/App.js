import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { MainPage } from './page/MainPage';
import { NFP } from './page/NFP';

import './app.scss';


function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='*' element={<NFP />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
