
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import { Shopcategory } from './Pages/Shopcategory';
import { Product } from './Pages/Product';
import Shop from './Pages/Shop';
import {Footer} from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path='Product' element={<Product />}>
        <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
