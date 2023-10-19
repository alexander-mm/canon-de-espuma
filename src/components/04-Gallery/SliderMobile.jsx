import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import foto1 from '../../assets/fotos/1.jpg'
import foto2 from '../../assets/fotos/2.jpg'
import foto3 from '../../assets/fotos/3.jpg'
import foto4 from '../../assets/fotos/4.jpg'
import foto5 from '../../assets/fotos/5.jpg'
import foto6 from '../../assets/fotos/6.jpg'
import foto7 from '../../assets/fotos/7.jpg'
import foto8 from '../../assets/fotos/8.jpg'
import foto9 from '../../assets/fotos/9.jpg'
import foto10 from '../../assets/fotos/10.jpg'
import foto11 from '../../assets/fotos/11.jpg'
import foto12 from '../../assets/fotos/12.jpg'
import foto13 from '../../assets/fotos/13.jpg'
import foto14 from '../../assets/fotos/14.jpg'
import foto15 from '../../assets/fotos/15.jpg'
import foto16 from '../../assets/fotos/16.jpg'
import foto17 from '../../assets/fotos/17.jpg'
import foto18 from '../../assets/fotos/18.jpg'
import foto19 from '../../assets/fotos/19.jpg'
import foto20 from '../../assets/fotos/20.jpg'
import foto21 from '../../assets/fotos/21.jpg'


export function SliderMobile() {
    return (
        <Splide options={{
            perPage: 2,
            gap: 30,
            width: 2000,
        }}>
            <SplideSlide>
                <img className='rounded-md' src={foto2} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto3} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto4} alt="Image 3" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto5} alt="Image 4" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto6} alt="Image 5" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto7} alt="Image 6" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto8} alt="Image 7" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto9} alt="Image 8" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto10} alt="Image 9" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto11} alt="Image 10" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto12} alt="Image 11" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto13} alt="Image 12" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto14} alt="Image 13" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto15} alt="Image 14" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto16} alt="Image 15" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto17} alt="Image 16" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto18} alt="Image 17" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto19} alt="Image 18" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto20} alt="Image 19" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto21} alt="Image 20" />
            </SplideSlide>
            <SplideSlide>
                <img className='rounded-md' src={foto1} alt="Image 21" />
            </SplideSlide>
        </Splide>
    );
}