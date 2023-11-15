import whatsapp from "../../assets/contact/whatsapp.png"
import fcbk from "../../assets/contact/fcbk.png"
import instagram from "../../assets/contact/instagram.png"
import youtube from "../../assets/contact/youtube.png"
import tiktok from "../../assets/contact/tiktok.png"
const LinksEcuador = () => {
    return (
        <div className="col-span-2 py-20 grid justify-items-center grid-rows-7 w-96 gap-8 sm:ml-20 sm:grid-cols-2 sm:grid-rows-3 sm:w-full md:ml-0 md:grid-rows-6 md:grid-cols-1 md:w-auto">

            <div className="flex self-center">
                <a className="flex self-center" href="https://api.whatsapp.com/send?phone=593980429801" target="_blank" rel="noopener noreferrer">
                    <img className="w-12" src={whatsapp} alt="" />
                    <span className="text-white self-center font-gothamRegular ml-4">WhatsApp: +593 98 042 9801</span>
                </a>
            </div>

            <div className="flex self-center">
                <a className="flex self-center" href="https://www.facebook.com/fiestadeespumaecuador?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <img className="w-12" src={fcbk} alt="" />
                    <span className="text-white self-center font-gothamRegular ml-4">Cañón de Espuma Ecuador</span>
                </a>
            </div>

            <div className="sm:col-span-2 md:col-span-1 flex self-center">
                <a className="flex self-center" href="https://www.youtube.com/@espumaplayentertainment1041/featured" target="_blank" rel="noopener noreferrer">
                    <img className="w-12" src={youtube} alt="" />
                    <span className="text-white self-center font-gothamRegular ml-4">Espuma Play Entertainment</span>
                </a>
            </div>

            <div className="flex self-center">
                <a className="flex self-center" href="https://instagram.com/espumaplay" target="_blank" rel="noopener noreferrer">
                    <img className="w-12" src={instagram} alt="" />
                    <span className="text-white self-center font-gothamRegular ml-4">@espumaplay</span>
                </a>
            </div>

            <div className="flex self-center">
                <a className="flex self-center" href="https://www.tiktok.com/@espumaplay?_t=8ercQb3nMH8&_r=1" target="_blank" rel="noopener noreferrer">
                    <img className="w-12" src={tiktok} alt="" />
                    <span className="text-white self-center font-gothamRegular ml-4">@espumaplay</span>
                </a>
            </div>
        </div>
    )
}

export default LinksEcuador