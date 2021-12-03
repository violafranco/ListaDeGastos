import React from 'react';
import { Helmet } from 'react-helmet';
import {Header, Titulo, ContenedorHeader} from './../elementos/Header';
import Boton from './../elementos/Boton.js';
import {Formulario, Input, ContenedorBoton} from './../elementos/ElementosDeFormularios';
import {ReactComponent as iniciarSesionSvg} from './../images/iniciarSesion.svg';
import styled from 'styled-components';

const IniciarSesion = () => {
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

            <Formulario>
                <Svg />
                <Input 
                    type='email'
                    name='email'
                    placeholder='Ingrese su correo electronico'
                />
                <Input 
                    type='password'
                    name='password'
                    placeholder='Ingrese su contraseña'
                />
                <ContenedorBoton>
                    <Boton as="button" type="submit" primario>iniciar Sesión</Boton>
                </ContenedorBoton>
            </Formulario>
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