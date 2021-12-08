import React from 'react';
import styled from 'styled-components';
import temas from '../temas';
import convertirAMoneda from './../funciones/convertirAMoneda'

const BarraTotal = styled.div`
    background: ${temas.verde};
    font-size: 0.9rem; /* 20px */
    letter-spacing: 0.8px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.6rem 2.2rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;

const BarraTotalGastado = () => {
    return ( 
        <BarraTotal>
            <p>Total gastado en el mes: </p>
            <p>{convertirAMoneda(0.00)}</p>
        </BarraTotal>
     );
}
 
export default BarraTotalGastado;