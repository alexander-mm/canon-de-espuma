import colombia from "../assets/colombia.svg"
import ecuador from "../assets/ecuador.svg"
import PropTypes from 'prop-types';

const Popup = ({ onImageClick }) => {
    return (
        <div className="" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#232323',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <img src="https://www.masqueunefecto.com/wp-content/uploads/2023/11/logo-1.png" className=" w-64 sm:w-96 mt-6 mb-14" alt="" />

            <p className=" text-center text-white text-2xl md:text-4xl font-nexa font-normal mb-14" >En qué lugar te encuentras?</p>

            <p className=" text-center text-white text-2xl font-century" >Colombia</p>
            <img className="cursor-pointer w-[200px] mt-4 mb-10 rounded-sm" src={colombia} alt="Imagen 1" onClick={() => onImageClick(1)} />

            <p className=" text-center text-white text-2xl font-century" >Ecuador</p>
            <img className="cursor-pointer w-[200px] mt-4 mb-10 rounded-sm" src={ecuador} alt="Imagen 2" onClick={() => onImageClick(2)} />

        </div>
    );
};
Popup.propTypes = {
    onImageClick: PropTypes.func,
};

export default Popup;