import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';

const GastosCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por categoria</Titulo>
            </Header>
        </>
     );
}
 
export default GastosCategoria;