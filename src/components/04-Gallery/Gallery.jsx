import { Slider } from "./Slider";
import SliderTwo from "./SliderTwo";
// import "./Events.css";

const Events = () => {
    return (
        <>
            <div className="w-full flex py-5 justify-center items-center bg-grayBanner">
                <p className="text-center text-skyEspuma text-3xl font-nexa font-semibold">
                    EXPLORA LA GALERÍA
                </p>
            </div>

            <div className="flex items-center justify-center pt-14 mb-10 mx-20">

                <div className="grid justify-items-center">

                    <div className="">
                        <p className="text-center text-md sm:text-lg md:text-xl text-white font-century mx-20 lg:mx-36 sm:mx-12 py-12">
                            Explora momentos llenos de diversión y emoción en nuestra galería multimedia. Descubre fotos vibrantes de eventos y fiestas en las que la espuma se apodera de la diversión. Bienvenido a un espacio donde la alegría y la energía se capturan en cada imagen.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 items-center mx-10">
                        <div className="md:pr-8">
                            <iframe
                                className="rounded-lg w-[425px] h-[250px] md:w-[500px] md:h-[300px]"
                                src="https://www.youtube.com/embed/CV6hEq-EyWc"
                                title="Video 1"
                            ></iframe>
                        </div>
                        <div className="md:pl-8">
                            <iframe
                                className="rounded-lg w-[425px] h-[250px] md:w-[500px] md:h-[300px]"
                                src="https://www.youtube.com/embed/t4OFxEDGx1A"
                                title="Video 2"
                            ></iframe>
                        </div>
                    </div>

                </div>

            </div>
            <div className="grid justify-items-center py-10">
                <div className="text-center pb-5">
                    <span className="hidden md:flex text-white font-century">◁ㅤ•••ㅤ▷</span>
                </div>
                <div className="hidden md:flex mx-10">
                    <Slider />
                </div>
                <div className="md:hidden w-[28em]">
                    <SliderTwo />
                </div>
                <div className="text-center pt-5">
                    <span className="hidden md:flex text-white font-century">◁ㅤ•••ㅤ▷</span>
                </div>
            </div>
        </>
    );
};

export default Events;

