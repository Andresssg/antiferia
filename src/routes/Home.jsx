import Carousel from "../components/Carousel"
import img_logo from "../assets/img_logo.png"
import img1_banner from "../assets/img1_banner.png"
import img2_banner from "../assets/img2_banner.png"
import img3_banner from "../assets/img3_banner.png"
import img4_banner from "../assets/img4_banner.png"


function Home() {
    const images = [
        img_logo,
        img1_banner,
        img2_banner,
        img3_banner,
        img4_banner
    ]

    return (
        <div>
            <div className="flex flex-col justify-center  items-center m-10 text-5xl text-center">
                <p>La ANTIFERIA promueve el consumo responsable</p>
                <p>es ANTI- consumismo, producción masiva y explotación laboral ♻️</p>
            </div>
            <Carousel images={images} />
        </div>)
}

export default Home