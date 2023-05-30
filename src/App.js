import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/signUpForm';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
import CardContainer from './components/cardContainer';
import LoginPage from './components/loginPage';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CartItems from './components/cartItems';

const items = [
  {
    id:1,
    name:"shoe",
    price:40.00,
    quantity:4,

  }
]

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<CardContainer/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/cartItems' element={<CartItems cartItems={items}/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
