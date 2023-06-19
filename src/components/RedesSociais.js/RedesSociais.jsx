import './RedesSociais.css';
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
const RedesSociais = () => {

    return (
        <>
            <div className='links'>
                <div className='linkss'>
                    <a href="https://www.instagram.com/jeferson.novaes.psi"> <AiFillInstagram /> <span>Instagram</span></a>
                   
                </div>

                <div>
                    <a href="https://api.whatsapp.com/message/EZF4A2CYCBISL1?autoload=1&app_absent=0">  <BsWhatsapp/><span>Whatsapp</span> </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/jeferson-novaes-58776015b/"> <AiFillLinkedin/> <span>Linkedin</span></a>
                </div>

            </div>

            <p className='criado'>Criado por : <span> <i>Ronaldo Nascimento</i></span></p>
        </>
    )
}

export default RedesSociais;