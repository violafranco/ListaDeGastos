import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Puntos} from './../images/puntos.svg';

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: #AAAAAA;
    }
`;
 
const PuntosArriba = styled(Puntos)`
    position: fixed;
    height: 30%;
    width: 30%;
    z-index: 1;
    top: 1rem; 
    left: -5rem;
`;
 
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    height: 30%;
    width: 30%;
    z-index: 1;
    bottom: 1rem; /* 40px */
    right: -5rem; /* 40px */
`;

const FondoPuntos = () => {
    return ( 
        <>
            <PuntosArriba />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fillOpacity="1"
                d="M0,96L60,101.3C120,107,240,117,360,138.7C480,160,600,192,720,181.3C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </Svg>
            <PuntosAbajo />
        </>
     );
}
 
export default FondoPuntos;
