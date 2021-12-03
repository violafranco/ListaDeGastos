import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';

const ListadeGastos = () => {
    return ( 
        <>
            <Helmet>
                <title>Lista de gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de gastos</Titulo>
            </Header>
        </>
     );
}
 
export default ListadeGastos;