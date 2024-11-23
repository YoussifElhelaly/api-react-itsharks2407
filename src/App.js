import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/productDetails';
import Aos from 'aos';
import "aos/dist/aos.css";
import "aos/dist/aos";
import { useEffect, useState } from 'react';
import CartPage from './pages/cart';

 import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import Category from './pages/categories';
import Search from './pages/search';
function App() {





  useEffect(()=>{

    Aos.init();
  },[])

  return (
    <>
   <Toaster />
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/productDetails/:productId' element={<ProductDetails/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/search/:searchTitle' element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
