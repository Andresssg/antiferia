function Cart({ setShowSidebar, items = [] }) {
    return (
        <div className="flex items-center relative">
            <button
                onClick={setShowSidebar}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-fill h-7" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </button>
            <span className="absolute bottom-0 right-0 rounded-full h-6 w-6 bg-red-500 text-center">{items.length}</span>
        </div>
    )
}

export default Cart