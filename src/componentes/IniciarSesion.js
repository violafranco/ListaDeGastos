import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton.js';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormularios';
import {ReactComponent as iniciarSesionSvg} from './../images/iniciarSesion.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { auth } from '../firebase/firebaseConfig';
import Alerta from '../elementos/Alerta';


const IniciarSesion = () => {

    //Estados
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    //Estado para la alerta
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setCorreo(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});

        //Comprobamos si todos los campos estan completos
        if(correo === '' || password === ''){
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Por favor complete todos los campos'
            });
            return;
        }
        

        try {
            await auth.signInWithEmailAndPassword(correo, password);
            navigate('/')
        } catch (error){
            setEstadoAlerta(true);

            console.log(error);

            let mensaje;
            switch(error.code){
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es corrrecta'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'Este correo electrónico no esta registrado'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear iniciar sesión'
                    break;
            }
            setAlerta({tipo: 'error', mensaje: mensaje})
        }

    }

    return ( 
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesión</Titulo>
                    <div>
                        <Boton to="/crear-cuenta">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Ingrese su correo electronico'
                    value={correo}
                    onChange={handleChange}
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Ingrese su contraseña'
                    value={password}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>iniciar Sesión</Boton>
                </ContenedorBoton>
            </Formulario>

            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </>
     );
}

const Svg = styled(iniciarSesionSvg)`
    width: 100%;
    max-height: 11.5rem;
    margin-bottom: -0.2rem;
    margin-top: -2rem;
`
 
export default IniciarSesion;