import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { NotFound } from "../pages/NotFound"
import { PrivateRoute } from "../components/PrivateRoute"
import { AboutUs } from "../pages/AboutUs" 
import ProductGrid from "../components/ProductGrid"
import ValidatedForm from "../components/ValidatedForm"
 
const RouterApp = () => {
 const products = [
    { id: 1, name: 'Camisa', price: 25.99, image: '/placeholder.jpg' },
    { id: 2, name: 'Campera', price: 49.99, image: '/placeholder.jpg' },
    { id: 3, name: 'Pantalón', price: 35.99, image: '/placeholder.jpg' },
  ]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }