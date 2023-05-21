import ProductCard from "../components/ProductCard"

function Products({ items }) {
    const sizes = ['xs', 's', 'm', 'l', 'xl']
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl p-10">Nuestros productos</h1>
            <p className="font-light text-2xl p-5">Algunos de nuestros participantes ofrecen los siguientes productos</p>
            <div className="flex justify-evenly items-center w-screen my-10">
                {items.map((item, i) => {
                    return <ProductCard key={i} product={item} sizes={sizes}/>
                })}
            </div>
        </div>
    )
}

export default Products