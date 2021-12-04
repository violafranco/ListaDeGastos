import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton.js';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormularios';
import {ReactComponent as loginSvg} from './../images/login.svg';
import styled from 'styled-components';
import Alerta from '../elementos/Alerta';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router';

const Registro = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    //estado para la alerta
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const handleChange = (e) => {
        switch(e.target.name){
            case 'email': setCorreo(e.target.value)
            break;

            case 'password': setPassword(e.target.value)
            break;

            case 'password2': setPassword2(e.target.value)
            break;

            default: break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(true);
        setAlerta({});

        //Comprobamos si las contraseñas coinciden
        if(password !== password2) {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Las contraseñas no coinciden'
            })
            return;
        }

        try {
            await auth.createUserWithEmailAndPassword(correo, password);
            navigate('/')
        } catch (error){
            setEstadoAlerta(true);

            let mensaje;
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'Las contraseña tiene que tener 6 caracteres'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con este correo'
                    setTimeout(() => {
                        navigate('/iniciar-sesion')
                    }, 2000)
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico es invalido'
                    break;
                default:
                    mensaje = 'La contraseña debe tener al menos 6 caracteres'
                    break;
            }
            setAlerta({tipo: 'error', mensaje: mensaje})
        }

    }

    return ( 
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesión</Boton>
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
                <Input 
                    type='password'
                    name='password2'
                    placeholder='Ingrese su nuevamente su contraseña'
                    value={password2}
                    onChange={handleChange}                    
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>Crear Cuenta</Boton>
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

const Svg = styled(loginSvg)`
    width: 100%;
    max-height: 6rem;
    margin-bottom: -0.2rem;
    margin-top: -2rem;
`
 
export default Registro;