import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import './App.css'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
