import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setShowSidebar, items = [], total, setTotal }) => {
  const [showCheckout, setShowCheckout] = useState(false)
  const changeCheckout = () => {
    setShowCheckout(!showCheckout)
  }

  return (
    <div className="fixed right-0 top-0 h-screen md:w-1/3 w-1/4 bg-gray-200 p-4 overflow-y-auto">
      <button onClick={setShowSidebar}
        className="fixed right-0 text-4xl font-bold text-red-500 rounded-full w-10 h-10 mx-5">X</button>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
          {items.map((item, i) => {
            const { image, name, description, price } = item
            return (
              <div key={i} className="flex w-full bg-gray-300 shadow-md my-5 p-3 gap-5 rounded-xl">
                <img src={image} alt="img" className="w-24" />
                <div className="flex flex-col">
                  <h3 className="mb-2 font-bold capitalize text-xl">{name}</h3>
                  <h4 className="mb-2 font-medium text-lg">${price}</h4>
                  <p className="mb-2">{description}</p>
                </div>
              </div>)
          })}
        </div>
        <h3 className="mb-2 font-bold capitalize text-xl">Total: {total}</h3>
        <Link to="checkout"
          className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </Link>
      </div>
    </div >
  );
};

export default Sidebar;
