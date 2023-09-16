import React, { useState } from 'react';
import {useLocation, useNavigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import './App.css'


function App() {

  const {pathname}= useLocation();

  return (
    <>
      {pathname !== '/' && <Nav></Nav>}
      <Routes>
            <Route path='/'element={<Home/>} ></Route>
            <Route path='/countries' element={<Cards/>}></Route>
            <Route path='/form' element={<Form/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>        
    </>
  )
}

export default App