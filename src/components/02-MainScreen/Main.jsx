// import backgroundVideo from '../../assets/main.mp4';
// import mainMobile from '../../assets/main-mobile.mp4';

const Main = () => (
    <section id="inicio" className="w-full min-h-screen relative">
        {/* Video para pantallas md: y más grandes */}
        <video
            className='hidden md:block absolute top-[3.9em] left-0 object-cover sm:w-full h-[102%]'
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
        >
            <source src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/main.mp4" type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
        </video>

        {/* Video para pantallas por defecto */}
        <video
            className='block md:hidden absolute top-[4.5em] left-0 object-cover sm:w-full h-[93%]'
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
        >
            <source src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/main-mobile.mp4" type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
        </video>
    </section>
);

export default Main;

