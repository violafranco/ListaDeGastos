import styled from "styled-components";
import { Link } from "react-router-dom";

const Boton = styled(Link)`
    /*Si las props del btn tiene el valor PRIMARIo, usamos color primario, sino el #000*/
    background: ${(props) => props.primario ? '#5B69E2' : '#000'};
    /*Si btn tiene icono, entonces mide 15.62(es decir que lo hacemos más largo), sino es auto el ancho*/
    width: ${(props) => props.conIcono ? '10rem' : 'auto'}; /* 250px */
    margin-left: 1rem;
    border: none;
    border-radius: 0.6rem;
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 2.6rem;
    padding: 1rem 1.2rem; /* 20px 30px */
    font-size: 0.9rem; 
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    outline: none;
 
 
    svg {
        /*Si el svg tiene la prop iconoGrande, le damos 100% de altura, sino lo hacemos más pequeño */
        height: ${(props) => props.iconoGrande ? '1.2em' : '0.75rem;'};  /* 12px */
        fill: white;
    }
`; 

export default Boton;