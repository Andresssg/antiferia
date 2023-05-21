import { HashRouter, Route, Routes, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./routes/Home"
import Products from "./routes/Products"
import About from "./routes/About"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react"
import Checkout from "./routes/Checkout"
import Gfa from "./routes/GFA"


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([
    {
      image: 'https://www.carlosnieto.com.co/wp-content/uploads/SACO-DESESTRUCTURADO-GRIS-MED-TEXTURA-CN-0021741-900x900-600x600.png',
      name: 'Elegante blazer para hombre', price: '25000',
      description: 'Impecable blazer hombre: elegancia y calidad se unen en esta prenda en perfecto estado.'
    },
    {
      image: 'https://estampadoypublicidad.com/wp-content/uploads/2020/10/Camisetas-para-halloween-15.png',
      name: 'Camiseta para Halloween', price: '20000',
      description: 'Camiseta negra de Halloween con cara, usada pero en buen estado. Ideal para celebrar la temporada con estilo.'
    },
    {
      image: 'https://broth3rs.co/wp-content/uploads/2023/04/221603-634x634@2x.png',
      name: 'Jean para hombre', price: '36000',
      description: 'Jean usado en buen estado, con un aspecto vintage y cómodo. Perfecto para un estilo casual y desenfadado, ideal para cualquier ocasión.'
    },
    {
      image: 'https://harleydavidson.vtexassets.com/arquivos/ids/158027/98168-21vw_Parte-delantera.png?v=637993756848730000',
      name: 'Chaqueta Harley Davidson', price: '100000',
      description: 'Chaqueta Harley Davidson usada por un año, con estilo icónico y un toque de rebeldía para lucir con actitud.'
    },
    {
      image: 'https://stayyclassyy.weebly.com/uploads/5/1/6/0/51607479/9995846_orig.png',
      name: 'Vestido con estampado de flores', price: '32.000',
      description: 'Chaqueta Harley Davidson usada por un año, con estilo icónico y un toque de rebeldía para lucir con actitud.'
    },
    {
      image: 'https://media.vogue.co.uk/photos/6329d12daac5fc8b4ef083fd/master/w_1280%2Cc_limit/GOLDISGN.png',
      name: 'Jeans claros para mujer', price: '22000',
      description: 'Jean ancho de mujer, usado por 3 meses y en buen estado. Atemporal, cómodo y versátil para lucir con estilo casual o elegante.'
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0118/0132/9723/products/product-image__L7p4D9-compressed.png?v=1652652137',
      name: 'Jeans anchos para mujer', price: '19000',
      description: 'Jean claro de mujer, con 2 años de uso y en buen estado. Combina comodidad y estilo en un diseño atemporal y versátil.'
    },

  ])
  const [cart, setCart] = useState([])

  const changeState = () => {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    let x = 0
    cart.map((item) => {
      x += parseInt(item.price)
    })
    setTotal(x)
  }, [cart])

  const changeTotal = (price) => {
    setTotal(total + price)
  }

  const changeCart = (item) => {
    setCart([...cart, item])
  }
  return (
    <>
      <HashRouter>
        <Navbar setShowSidebar={changeState} cart={cart} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products items={items} setCart={changeCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gfa" element={<Gfa />} />
          <Route path="/checkout" element={<Checkout cart={cart} total={total} />} />
        </Routes>
        {showSidebar && <Sidebar setShowSidebar={changeState} cart={cart} total={total} setTotal={changeTotal} />}
      </HashRouter>
    </>
  )
}

export default App
