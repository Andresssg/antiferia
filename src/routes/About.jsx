import StatsCard from "../components/StatsCard"

function About() {
    const statistics = [
        { data: '4', text: 'Emisiones de CO2', type: '%' },
        { data: '80', text: 'De la ropa se tira a vertederos o se incinera', type: '%' },
        { data: '35', text: 'De contaminación de micro pásticos en el océano proviene de fibras sintéticas.', type: '%' },
        { data: '15.000', text: 'De agua son gastados en promedio para producir una vestimenta', type: 'lts' },
        { data: '36', text: 'Se consumen de electricidad en el proceso de fabricación de una prenda', type: 'kWh' },
        { data: '20', text: 'De las aguas residuales industriales a nivel mundial', type: '%' },
    ]
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='flex flex-col items-center text-7xl py-24 w-full font-medium'>
                <p>Ropa rápida</p>
                <p>consecuencias lentas</p>
            </div>
            <div>
                {statistics.map((statistic, i) => {
                    const { data, text, type } = statistic
                    return <StatsCard key={i} type={type} data={data} text={text} position={i % 2 === 0 ? 'left' : 'right'} />
                })}
            </div>
        </div>
    )
}

export default About