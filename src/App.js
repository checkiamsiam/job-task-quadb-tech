import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import GoToTop from './components/GoTopButton/GoTop';
import Header from './components/Header/Header';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/movie' element={<Home/>}/>
      </Routes>
      <Footer/>
      <GoToTop/>
    </div>
  );
};

export default App;
