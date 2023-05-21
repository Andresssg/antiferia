import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart = [], total }) => {
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [nombreTitular, setNombreTitular] = useState('');
    const [fechaExpiracion, setFechaExpiracion] = useState('');
    const [codigoCVV, setCodigoCVV] = useState('');
    const [resumenCompra, setResumenCompra] = useState(null);

    const handleConfirmarCompra = () => {
        if (numeroTarjeta && nombreTitular && fechaExpiracion && codigoCVV) {
            // Aquí puedes realizar las acciones necesarias para confirmar la compra
            const cantidadProductos = cart.length;

            setResumenCompra({ total, cantidadProductos });
        }
    };

    return (
        <>
            {cart.length === 0 ?
                <div className='flex flex-col justify-center items-center text-5xl w-full h-96 font-bold'>
                    <h2>No hay productos en tu carrito, comienza por añadir uno.</h2>
                    <Link to="/products" className='text-4xl text-emerald-500'>Ir a comprar</Link>
                </div> :
                <div className="max-w-md mx-auto p-4 bg-white rounded shadow my-10">
                    <h2 className="text-xl font-bold mb-4">Datos de la tarjeta</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroTarjeta">
                            Número de tarjeta
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                            type="text"
                            id="numeroTarjeta"
                            value={numeroTarjeta}
                            onChange={(e) => setNumeroTarjeta(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroTarjeta">
                            Nombre del titular
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                            type="text"
                            id="numeroTarjeta"
                            value={nombreTitular}
                            onChange={(e) => setNombreTitular(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroTarjeta">
                                Fecha de expiración
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                                type="date"
                                id="numeroTarjeta"
                                value={fechaExpiracion}
                                onChange={(e) => setFechaExpiracion(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroTarjeta">
                                CVV
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-emerald-500"
                                type="number"
                                id="numeroTarjeta"
                                max="999"
                                min="100"
                                value={codigoCVV}
                                onChange={(e) => setCodigoCVV(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            className={`w-full bg-emerald-500 text-white font-bold py-2 px-4 rounded ${!(numeroTarjeta && nombreTitular && fechaExpiracion && codigoCVV) ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleConfirmarCompra}
                            disabled={!(numeroTarjeta && nombreTitular && fechaExpiracion && codigoCVV)}
                        >
                            Confirmar compra
                        </button>
                    </div>
                    {resumenCompra && (
                        <div>
                            <h3 className="text-lg font-bold mb-2">Resumen de la compra:</h3>
                            <p>Total: {resumenCompra.total}</p>
                            <p>Cantidad de productos: {resumenCompra.cantidadProductos}</p>
                        </div>
                    )}
                    <div>

                    </div>
                </div>
            }
        </>
    );
};

export default Checkout
