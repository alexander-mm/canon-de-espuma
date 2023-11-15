import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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

const SliderTwo = () => {
    return (

        <Slider autoplay={2000} infinite={true} duration={1500} minSwipeOffset={0}>
            <img src={foto1} />
            <img src={foto2} />
            <img src={foto3} />
            <img src={foto4} />
            <img src={foto5} />
            <img src={foto6} />
            <img src={foto7} />
            <img src={foto8} />
            <img src={foto9} />
            <img src={foto10} />
            <img src={foto11} />
            <img src={foto12} />
            <img src={foto13} />
            <img src={foto14} />
            <img src={foto15} />
            <img src={foto16} />
            <img src={foto17} />
            <img src={foto18} />
            <img src={foto19} />
            <img src={foto20} />
            <img src={foto21} />
        </Slider>
    )
}

export default SliderTwo