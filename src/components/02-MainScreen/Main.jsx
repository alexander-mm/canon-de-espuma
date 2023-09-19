import backgroundVideo from '../../assets/main.mp4';

const Main = () => (
    <section id="inicio" className="w-full mt-12">

        <div className='relative'>
            <video className='absolute inset-0 w-full h-full object-cover' loop muted playsInline autoPlay loading="lazy" width="640" height="360">
                <source src={backgroundVideo} type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
            </video>

            <div className='text-center flex flex-col items-center justify-center relative z-10 p-[32rem]'>

            </div>
        </div>
    </section>
);

export default Main;
