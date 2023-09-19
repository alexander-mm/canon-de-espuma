import { Slider } from "./Slider";
// import "./Events.css";

const Events = () => {
    return (
        <>
            <div className="w-full flex py-4 justify-center items-center bg-grayEspuma">
                <p className="text-center text-white text-3xl font-poppins">
                    NUESTRA GALERIA
                </p>
            </div>

            <div className="flex items-center justify-center py-20 mx-20">

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">

                    <div className="flex flex-col justify-around items-center">
                        <div className="">
                            <iframe
                                className="rounded-lg w-[426px] h-[240px] m-4"
                                src="https://www.youtube.com/embed/CV6hEq-EyWc"
                                title="Video 1"
                            ></iframe>
                        </div>
                        <div className="">
                            <iframe
                                className="rounded-lg w-[426px] h-[240px]"
                                src="https://www.youtube.com/embed/t4OFxEDGx1A"
                                title="Video 2"
                            ></iframe>
                        </div>
                    </div>

                    <div className=" grid md:grid-rows-2 md:col-span-2 items-center">
                        <p className="m-14 md:m-12 text-center text-xl sm:text-2xl  font-semibold text-white font-century">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium inventore voluptatibus? Ratione quibusdam incidunt blanditiis voluptatem, deserunt corporis pariatur dolor et quas labore veritatis natus placeat, sunt est dicta.
                        </p>
                        <div>
                            <div className="text-center pb-5">
                                <span className="text-white font-century">◁ㅤ•••ㅤ▷</span>
                            </div>
                            <div className="">
                                <Slider />
                            </div>
                            <div className="text-center pt-5">
                                <span className="text-white font-century">◁ㅤ•••ㅤ▷</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Events;

