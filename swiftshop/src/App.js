import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Compare from './pages/Compare';
import Wishlist from './pages/Wishlist';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="compare" element={<Compare />}/>
          <Route path="wishlist" element={<Wishlist />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
