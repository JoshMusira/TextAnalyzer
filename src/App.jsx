import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import AverageContainer from './Components/AverageContainer'
import FooterContainer from './Components/FooterContainer'
import Header from './Components/Header'

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
        <FooterContainer />
      </BrowserRouter>

      {/* <div className='main-section'> */}
      {/* <Section /> */}
      {/* <TextArea /> */}
      {/* <AverageContainer /> */}
      {/* </div> */}
      {/* <FooterContainer /> */}


    </>
  )
}

export default App
