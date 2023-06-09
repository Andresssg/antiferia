function ProductCard({ product, sizes, setCart }) {
    const { image, name, description, price } = product
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white py-5">
            <img className="w-full h-80 object-contain" src={image} alt={name} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-2xl mb-2">{name}</h3>
                <p className="text-gray-700 font-medium text-xl">${price}</p>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex justify-evenly px-6 py-4 font-semibold text-gray-700 text-sm">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 ">Tallas:</span>
                {sizes.map((size, index) => (
                    <button key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-400">{size}</button>
                ))}
            </div>
            <div className="flex justify-center items-center px-10">
                <button
                    onClick={() => setCart(product)}
                    className="bg-emerald-500 p-3 rounded-lg text-gray-100 font-medium">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard