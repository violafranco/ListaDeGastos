import React, { useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import temas from '../temas';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
 
        background: ${(props) => {
            if(props.tipo === 'error'){
                return temas.rojo;
            } else if (props.tipo === 'exito') {
                return temas.verde;
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
        font-size: 0.8em;
    }
`;

const Alerta = ({tipo, mensaje, estadoAlerta, setEstadoAlerta}) => {
    useEffect(() => {
        let tiempo;

        if(estadoAlerta === true){
            tiempo = setTimeout(() => {
                setEstadoAlerta(false);
            }, 4000)
        }
        
        //Esta función del return se ejecuta si el componente se desmonta
        //Limpiamos el timepo para que no intente cambiarlo si el componente no esta en la pantalla
        return(() => clearTimeout(tiempo));

    }, [estadoAlerta, setEstadoAlerta])
    return (
        <>  {
            estadoAlerta && 
                <ContenedorAlerta tipo={tipo}>
                <p>{mensaje}</p>
                </ContenedorAlerta>
            }
            
        </> 
     );
}
 
export default Alerta;