import { Route, Routes, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import './App.css'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './context/ProtectedRoute'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import AdminNav from './components/AdminNav'
import NavbarWhite from './components/NavbarWhite'
import AdminStore from './pages/AdminStore'
import AdminSetting from './pages/AdminSetting'




function App() {
  // const isAdmin = false
  const [password, setPassword] = useState("")
  const location = useLocation()

  const isAdminRoute = location.pathname.startsWith("/admin")
  const isLogin = location.pathname === "/login"
  const isStore = location.pathname === "/store"



  return (
    <>

      {isAdminRoute ? <AdminNav /> : isStore ? <NavbarWhite /> : !isLogin && <Navbar />}

      <Routes>
        <Route path='/login' element={<LoginPage password={password} setPassword={setPassword} />} />
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetail />} />


        <Route element={<ProtectedRoute isPassword={password === "admin12345"} />}>
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='/adminstore' element={<AdminStore />} />
          <Route path='/adminsetting' element={<AdminSetting />} />
        </Route>
      </Routes>
      {!isLogin && <Footer />}

    </>
  )
}

export default App
