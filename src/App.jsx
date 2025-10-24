import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ofertas from './components/Ofertas.jsx';
import Infaltables from './components/Infaltable.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';



function App() {
  

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/infaltables" element={<Infaltables />} />
          <Route path="/administracion" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
