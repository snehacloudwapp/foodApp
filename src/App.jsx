
import './App.css'

import Home from './component/page/home';
import LoginPage from './component/page/loginpage';
import { Routes, Route } from "react-router-dom"
import Signup from './component/page/signup';
import Blogpage from './component/page/blogpage';
import About from './component/page/about';
import Product from './component/page/product';
import Offer from './component/page/offer';
import Contactus from './component/page/contactus';

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/blog" element={<Blogpage />}></Route>

      </Routes>

    </>
  )
}

export default App
