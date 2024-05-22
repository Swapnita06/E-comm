import React from 'react'
import Nav from './components/Nav'
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Component</h1>}/>
        <Route path='/update' element={<h1>Update Product Component</h1>}/>
        <Route path='/logout' element={<h1>LOGOUT</h1>}/>
        <Route path='/profile' element={<h1>Profile component</h1>}/>
      
      
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
