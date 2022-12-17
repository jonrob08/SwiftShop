import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { Home, Store, Blog, Contact, Compare, Wishlist, Login, Signup, ForgotPassword, } from './pages';

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
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="forgot" element={<ForgotPassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
