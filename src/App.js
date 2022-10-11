import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import GoToTop from './components/GoTopButton/GoTop';
import Header from './components/Header/Header';
import Home from './pages/home';
import MovieDetails from './pages/movieDetail';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
      </Routes>
      <Footer/>
      <GoToTop/>
    </div>
  );
};

export default App;
