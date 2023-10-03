import mapa from "../../assets/mapa.png"
import Form from "./Form"
import PropTypes from 'prop-types';
import ContactLinksColombia from "./LinksColombia"
import ContactLinksEcuador from "./LinksEcuador"

const Contact = ({ contactLinksOption }) => {

    return (
        <>
            <div className="w-full flex py-5 justify-center items-center bg-whiteEspuma">
                <p className="text-center text-bluesEspuma text-3xl font-poppins font-semibold">CONTACTO</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 py-0 px-10 justify-items-center">

                <div className="flex items-center justify-center col-span-2">
                    <img className="w-5/6 sm:w-8/12 md:w-full mb-14 md:mb-0 p-4" src={mapa} alt="" />
                </div>

                <Form />

                {contactLinksOption === 1 ? <ContactLinksColombia /> : <ContactLinksEcuador />}

            </div>
        </>
    )
}
Contact.propTypes = {
    contactLinksOption: PropTypes.number,
};

export default Contact;