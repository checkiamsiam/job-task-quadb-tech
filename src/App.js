import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <GoToTop/>
    </div>
  );
};

export default App;
