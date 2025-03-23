import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Order from './pages/Order'
import OrderDisplay from './pages/OrderDisplay'
import Product from './pages/Product'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/about' element = {<About />}></Route>
        <Route path='/contact' element = {<Contact />}></Route>
        <Route path='/collection' element = {<Collection />}></Route>
        <Route path='/cart' element = {<Cart />}></Route>
        <Route path='/place-order' element = {<Order />}></Route>
        <Route path='/order-display' element = {<OrderDisplay />}></Route>
        <Route path='/product/:productId' element = {<Product />}></Route>
        <Route path='/login' element = {<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

