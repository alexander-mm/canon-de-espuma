const About = () => {
    return (
        <>
            <div className="mt:0 md:mt-[5.7em] w-full flex py-5 justify-center items-center bg-grayBanner">
                <p className="text-center text-skyEspuma text-xl md:text-3xl font-nexa font-semibold mt-4">CONOCE NUESTRO PROYECTO</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="overflow-hidden m-4">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="flex flex-col items-center justify-center md:col-span-2">
                            <p className="text-center mt-14 md:mt-8 mb-10 text-md sm:text-lg md:text-xl text-white font-century">Sonrisas, locura y emoción son esenciales para TÚ celebración!!!!</p>
                            <img className="w-11/12 sm:w-3/5" src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/slogan.png" alt="" />
                            <p className=" m-10 md:m-12 text-center text-md sm:text-lg md:text-xl text-white font-century">El 14 de septiembre del 2013 ambientamos la primera fiesta de espuma y nace Espuma Play. Llevamos
                                más de 10 años en el mundo del entretenimiento especializados en el dimensionamiento y cubrimiento de
                                todo tipo de eventos temáticos con espuma. Gracias al esfuerzo y dedicación nos hemos convertido en un
                                referente a nivel de toda latino América en el rubro de las fiestas de espuma.<br /><br />
                                Nuestra logística especializada convierte una fiesta convencional en un lugar mágico y de fantasía, metros
                                y metros cúbicos de espuma saliendo de los potentes cañones de nuestro arsenal, los mejores insumos y
                                personal calificado, dedicado 100% al desarrollo creativo y recreativo de cada evento.
                                <br /><br />Bienvenido al mundo de las fiestas de espuma! Dale play a la diversión.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img className="w-96 my-6 rounded-lg" src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/1.jpg" alt="Imagen 1" />
                            <img className="w-96 my-6 rounded-lg" src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/16.jpg" alt="Imagen 16" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default About