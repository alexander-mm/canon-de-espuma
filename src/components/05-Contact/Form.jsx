import { useState } from 'react';
import Error from './Error';
import emailjs from 'emailjs-com';


const Form = () => {

    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [whatsapp, setWhatsApp] = useState("")
    const [email, setEmail] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombres, apellidos, whatsapp, email, ciudad, mensaje].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        setNombres('')
        setApellidos('')
        setWhatsApp('')
        setEmail('')
        setCiudad('')
        setMensaje('')

        const serviceID = 'service_cbwtn98';
        const templateID = 'template_9b93df9';
        const userID = 'bvahDzKpDYIhGFTkD';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Correo electrónico enviado con éxito', result.text);
            })
            .catch((error) => {
                console.error('Error al enviar el correo electrónico', error);
            });
    };

    return (
        <div className="w-full col-span-3 p-10">

            <form
                onSubmit={handleSubmit}
                className="bg-grayBanner rounded-md py-10 px-8"
            >

                <div className="mb-5">
                    <label htmlFor="nombres" className="block text-white uppercase font-bold">
                        Nombres:
                    </label>
                    <input
                        id="nombres"
                        type="text"
                        name="nombres"
                        placeholder="Escribe tus nombres"
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="apellidos" className="block text-white uppercase font-bold">
                        Apellidos:
                    </label>
                    <input
                        id="apellidos"
                        type="text"
                        name="apellidos"
                        placeholder="Escribe tus apellidos"
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="whatsapp" className="block text-white uppercase font-bold">
                        WhatsApp:
                    </label>
                    <input
                        id="whatsapp"
                        type="text"
                        name="whatsapp"
                        placeholder="Escribe tu número de WhatsApp"
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={whatsapp}
                        onChange={(e) => setWhatsApp(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-white uppercase font-bold">
                        E-mail:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Escribe tu dirección de correo electrónico"
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="ciudad" className="block text-white uppercase font-bold">
                        Ciudad:
                    </label>
                    <input
                        id="ciudad"
                        type="text"
                        name="ciudad"
                        placeholder="Escribe tu ciudad"
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="pais" className="block text-white uppercase font-bold">
                        Déjanos un mensaje:
                    </label>
                    <textarea
                        id="pais"
                        type="text"
                        name="pais"
                        placeholder=""
                        className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </div>

                {error && <Error />}

                <input
                    type="submit"
                    className="bg-skyEspuma hover:bg-blueEspuma w-full p-3 text-white rounded-md mt-8 uppercase font-bold cursor-pointer" value="ENVIAR" />
            </form>
        </div>
    )
}

export default Form