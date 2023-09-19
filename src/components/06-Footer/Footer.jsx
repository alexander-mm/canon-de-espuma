import whatsapp from "../../assets/whats-dev.png"
import linkedin from "../../assets/linkedin.png"

const Footer = () => {
    return (
        <div className="bg-primary border-t border-slate-900">
            <div className="py-5 bg-custom-gradient text-center flex flex-col md:flex-row justify-between items-center">
                <span className="text-white text-[13px] items-center md:ml-6">Todos los derechos reservados © 2023</span>
                <span className="text-white text-md items-center my-4 md:my-0 md:ml-6">Espuma Play Entertainment™, una división de +FX™</span>
                <div className="flex flex-row items-center md:mr-6">
                    <span className="text-white text-[13px] items-center">© 2023 - Alexander Mena</span>
                    <a href="https://api.whatsapp.com/send?phone=573186441844" target="_blank" rel="noopener noreferrer"><img className="mx-4 w-[28px]" src={whatsapp} alt="" /></a>
                    <a href="https://www.linkedin.com/in/alexander-mm/" target="_blank" rel="noopener noreferrer"><img className="w-[28px]" src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer