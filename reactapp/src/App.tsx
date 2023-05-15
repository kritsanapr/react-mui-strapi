// import { Button, Stack } from '@mui/material'
import { Delete, Send, Photo } from '@mui/icons-material'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import BackendLayout from "./layouts/BackendLayout"
import Dashboard from "./pages/Dashboard"
import Product from "./pages/Product"
import Report from "./pages/Report"
import Setting from "./pages/Setting"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<BackendLayout />}>
          <Route path="/backend/dashboard" element={<Dashboard />} />
          <Route path="/backend/product" element={<Product />} />
          <Route path="/backend/report" element={<Report />} />
          <Route path="/backend/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
