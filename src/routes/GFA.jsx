import StatsCard from "../components/StatsCard"

function Gfa() {
    const statistics = [
        { data: '50', text: 'De reducción de GEI para 2030 y cero emisiones netas de GEI para 2050', type: '%' },
        { data: '70', text: 'De los trabajadores ganan un salario digno', type: 'M' },
        { data: 'Reducir', text: 'el uso de poliéster virgen, algodón convencional y celulosa artificial convencional. Reducir significativamente el uso de recursos finitos.', type: '🔽' },
        
    ]
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='flex flex-col justify-center items-center text-7xl py-24 w-full font-medium gap-2'>
                <h2>Global Fashion Agenda</h2>
                <p className="text-5xl font-light">
                    <span className="text-emerald-500 font-bold">GFA</span> se esfuerza por acelerar el siguiente impacto</p>
            </div>
            <div className="flex flex-wrap justify-between w-full">
                {statistics.map((statistic, i) => {
                    const { data, text, type } = statistic
                    return <StatsCard key={i} type={type} data={data} text={text} position={i % 2 === 0 ? 'left' : 'right'} />
                })}
            </div>
        </div>
    )
}

export default Gfa