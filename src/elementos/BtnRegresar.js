import React from 'react';
import styled from 'styled-components';
import {ReactComponent as flecha} from './../images/flecha.svg';
import {useNavigate} from 'react-router-dom';

const Btn = styled.button`
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 3rem;
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icono = styled(flecha)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

//useNavigate permite utilizar las direcciones de los path
const BtnRegresar = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <Btn onClick={() => navigate(ruta)}><Icono /></Btn>
     );
}
 
export default BtnRegresar;

