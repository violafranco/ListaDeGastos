import React from 'react';
import styled from 'styled-components';
import temas from '../temas';
import convertirAMoneda from './../funciones/convertirAMoneda'
import { useTotalDelMes } from '../contextos/TotalGastadoContext';

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

    const {total} = useTotalDelMes();

    return ( 
        <BarraTotal>
            <p>Total gastado en el meeeeees: </p>
            <p>{convertirAMoneda(total)}</p>
        </BarraTotal>
     );
}
 
export default BarraTotalGastado;