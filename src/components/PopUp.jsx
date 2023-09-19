import colombia from "../assets/bandera-colombia.jpg"
import ecuador from "../assets/bandera-ecuador.jpg"
import PropTypes from 'prop-types';

const Popup = ({ onImageClick }) => {
    return (
        <div className="" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#00040F',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <p className=" text-center text-white text-4xl font-poppins mb-20" >Elige tu país:</p>

            <p className=" text-center text-white text-2xl font-poppins" >Colombia</p>
            <img className="cursor-pointer w-[250px] mt-4 mb-10 rounded-lg" src={colombia} alt="Imagen 1" onClick={() => onImageClick(1)} />

            <p className=" text-center text-white text-2xl font-poppins mt-4" >Ecuador</p>
            <img className="cursor-pointer w-[250px] mt-4 mb-10 rounded-lg" src={ecuador} alt="Imagen 2" onClick={() => onImageClick(2)} />

        </div>
    );
};
Popup.propTypes = {
    onImageClick: PropTypes.func,
};

export default Popup;