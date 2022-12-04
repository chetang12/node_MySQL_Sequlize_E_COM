
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //is imp to navigate one page to anuther type hashRouter , mermoryRouter
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
import ProductDetail from './screens/ProductDetail';
import ShowProducts from './screens/ShowProducts';
import AddCart from './screens/AddCart';

import NavBar from './components/Navbar';
import Login from './/screens/Login';
const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/products' element={<ShowProducts />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/AddCart' element={<AddCart />} />
        <Route path='/Product/edit/:id' element={<EditProduct />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
   
  )
}

export default App