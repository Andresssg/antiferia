import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Products from "./routes/Products"
import About from "./routes/About"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import Checkout from "./routes/Checkout"


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([
    { image: 'https://www.carlosnieto.com.co/wp-content/uploads/SACO-DESESTRUCTURADO-GRIS-MED-TEXTURA-CN-0021741-900x900-600x600.png', name:'product 1' ,price: '1000', description: 'texto' },
    { image: 'https://estampadoypublicidad.com/wp-content/uploads/2020/10/Camisetas-para-halloween-15.png', name:'product 2' ,price: '2000', description: 'texto' },
    { image: 'https://broth3rs.co/wp-content/uploads/2023/04/221603-634x634@2x.png', name:'product 3' ,price: '3000', description: 'texto' },
  ])

  const changeState = () => {
    setShowSidebar(!showSidebar)
  }

  const changeTotal = (price) => {
    setTotal(total + price)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar setShowSidebar={changeState} items={items} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products items={items}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout items={items} total={total}/>} />
        </Routes>
        {showSidebar && <Sidebar setShowSidebar={changeState} items={items} total={total} setTotal={changeTotal}/>}
      </BrowserRouter>
    </>
  )
}

export default App
