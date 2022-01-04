import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';
import BarraTotalGastado from '../elementos/BarraTotalGastado.js';
import useObtenerGastoMes from '../hooks/useObtenerGastoMes.js';

const GastosCategoria = () => {

    useObtenerGastoMes();

    return ( 
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por categoria</Titulo>
            </Header>

            <BarraTotalGastado />
        </>
     );
}
 
export default GastosCategoria;