import './App.css';
// import Header from './header/Header'
// import FooterLinks from './MainPage/FooterLinks';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Roulette from './pages/Roulette'
import Home from './pages/Home';
import SearchName from './pages/SearchName';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter> 
        {/* <Header /> */}
          <Routes>
          <Route path='/roulette' element={<Roulette />} />
          <Route path='/home' element={<Home />} />
          <Route path='/searchname/:search' element={<SearchName />} />
          {/* <Route path='/searchname' element={<SearchName />} /> */}
          {/* <Route path='/searchname/:search' element={<SearchName />} /> */}
          <Route path='/notfound' element={<NotFound />} />
          {/* <Route path='*' element={<NotFound />}/> */}
          </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
