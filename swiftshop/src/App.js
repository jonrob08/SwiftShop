import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { 
  Home,
  Store, 
  Blog, 
  Contact, 
  Compare, 
  Wishlist, 
  Login, Signup, 
  ForgotPassword, 
  ResetPassword,
  Article,
  PrivacyPolicy,
  RefundPolicy,
  ShippingPolicy,
  TermsAndConditions,
  Product,
  Cart,
  Checkout,
  Shipping,
  Payment
} from './pages';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />}/>
          <Route path="product/:id" element={<Product />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="blog/:id" element={<Article />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="shipping" element={<Shipping />}/>
          <Route path="payment" element={<Payment />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="compare" element={<Compare />}/>
          <Route path="wishlist" element={<Wishlist />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="forgot" element={<ForgotPassword />}/>
          <Route path="reset" element={<ResetPassword />}/>
          <Route path="privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="refund-policy" element={<RefundPolicy />}/>
          <Route path="shipping-policy" element={<ShippingPolicy />}/>
          <Route path="tandc" element={<TermsAndConditions />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
