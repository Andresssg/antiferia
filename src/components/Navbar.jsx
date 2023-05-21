
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar = ({ setShowSidebar, cart }) => {

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-2xl">Antiferia</span>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 text-md font-medium">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
              >
                Productos
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
              >
                About
              </Link>
              <Link
                to="/GFA"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
              >
                GFA
              </Link>
            </div>
          </div>
          <Cart setShowSidebar={setShowSidebar} items={cart}/>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
