import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import AverageContainer from './Components/AverageContainer'
import FooterContainer from './Components/FooterContainer'
import Header from './Components/Header'
import Section from './Components/Section'
import TextArea from './Components/TextArea'
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';

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
