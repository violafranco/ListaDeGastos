import React from 'react';
import {ReactComponent as IconoCerrarSesion} from './../images/cerrarSesion.svg'
import Boton from './Boton';
import {auth} from './../firebase/firebaseConfig';
import { useNavigate } from 'react-router';

const BotonCerrarSesion = () => {
    const navigate = useNavigate();

    const cerrarSesion = async () => {
        try {
            await auth.signOut();
            navigate('/iniciar-sesion');
        } catch(error) {
            console.log(error);
        }
        
    }
 
    return ( 
        <Boton iconoGrande as='button' onClick={cerrarSesion}>
            <IconoCerrarSesion />
        </Boton>
     );
}
 
export default BotonCerrarSesion;
