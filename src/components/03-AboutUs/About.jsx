import slogan from "../../assets/slogan.png"
import foto1 from "../../assets/fotos/1.jpg"
import foto16 from '../../assets/fotos/16.jpg'

const About = () => {
    return (
        <>
            <div className="mt:0 md:mt-[5.7em] w-full flex py-5 justify-center items-center bg-whiteEspuma">
                <p className="text-center text-bluesEspuma text-3xl font-poppins font-semibold"> SOBRE NOSOTROS</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="overflow-hidden m-4">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="flex flex-col items-center justify-center md:col-span-2">
                            <p className="text-center mt-14 md:mt-8 mb-10 text-xl sm:text-2xl md:text-3xl font-semibold text-white font-nexa">Sonrisas, locura y emoción son esenciales para TÚ celebración!!!!</p>
                            <img className="w-11/12 sm:w-3/5" src={slogan} alt="" />
                            <p className=" m-10 md:m-12 text-center text-xl sm:text-2xl font-semibold text-white font-nexa">El 14 de septiembre del 2013 ambientamos la primera fiesta de espuma y nace Espuma Play. Llevamos
                                más de 9 años en el mundo del entretenimiento especializados en el dimensionamiento y cubrimiento de
                                todo tipo de eventos temáticos con espuma. Gracias al esfuerzo y dedicación nos hemos convertido en un
                                referente a nivel de toda latino América en el rubro de las fiestas de espuma.<br /><br />
                                Nuestra logística especializada convierte una fiesta convencional en un lugar mágico y de fantasía, metros
                                y metros cúbicos de espuma saliendo de los potentes cañones de nuestro arsenal, los mejores insumos y
                                personal calificado, dedicado 100% al desarrollo creativo y recreativo de cada evento.
                                <br /><br />Bienvenido al mundo de las fiestas de espuma! Dale play a la diversión.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img className="w-96 my-6 rounded-lg" src={foto1} alt="Imagen 2" />
                            <img className="w-96 my-6 rounded-lg" src={foto16} alt="Imagen 1" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default About