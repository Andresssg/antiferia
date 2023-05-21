import { useEffect, useState } from "react"

function Checkout({ items = [], total }) {
    return (
        <>
            {items.length === 0 ? <h1>No hay productos en tu carrito, comienza por añadir uno</h1> :
                <h1>Checkout {items.length} {total}</h1>}
        </>
    )
}

export default Checkout