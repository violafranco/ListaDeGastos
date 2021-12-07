import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import temas from '../temas';
import {ReactComponent as IconDown} from './../images/down.svg';
import IconoCategoria from './IconoCategoria';

const ContenedorSelect = styled.div`
    background: ${temas.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 3.5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.2rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    font-weight: 400;
    &:hover {
        background: ${temas.grisClaro2};
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Opciones = styled.div`
    background: ${temas.grisClaro};
    position: absolute;
    top: 3.9rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 15rem; /* 300px */
    overflow-y: auto;
`;
 
const Opcion = styled.div`
    padding: 0.8rem; /* 20px */
    display: flex;

    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${temas.grisClaro2};
    }
`;

const SelectCategorias = ({categoria, setCategoria}) => {

    const [mostrarSelect, setMostrarSelect] = useState(false);

    const categorias = [
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud e higiene', texto: 'Salud e Higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'diversion', texto: 'Diversion'}
    ]

    const handleClick = (e) => {
        setCategoria(e.currentTarget.dataset.valor)
    }

    return ( 
        <ContenedorSelect onClick={() => setMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{categoria}<IconDown/></OpcionSeleccionada>
            
            {mostrarSelect && 
            <Opciones>
                {categorias.map((categoria) => {
                    return <Opcion
                                key={categoria.id}
                                data-valor={categoria.id}
                                onClick={handleClick}                             
                            >
                                <IconoCategoria nombre={categoria.id} />
                                {categoria.texto}
                            </Opcion>
                })}
            </Opciones>
            }
        </ContenedorSelect>
     );
}
 
export default SelectCategorias;