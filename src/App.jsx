import { ProductsContextProvider } from "./context/products.context"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart"

function App() {

  return (
    <>
      <ProductsContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductsContextProvider>
    </>
  )
}

export default App
