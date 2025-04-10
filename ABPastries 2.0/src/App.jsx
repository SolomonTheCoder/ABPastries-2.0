import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import './App.css'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './context/ProtectedRoute'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import AdminStore from './pages/AdminStore'
import AdminSetting from './pages/AdminSetting'
import ClientTemplate from './Layout/ClientLayout'
import EditCategory from './pages/AddProduct'
import AdminLayout from './Layout/AdminLayout'





function App() {



  return (
    <>

      <Routes>

        <Route element={<ClientTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Route>

        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/adminstore' element={<AdminStore />} />
            <Route path='/adminsetting' element={<AdminSetting />} />
            <Route path='/editcategory' element={<EditCategory />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
