import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';
import BarraTotalGastado from '../elementos/BarraTotalGastado.js';
import FormularioGasto from './FormularioGasto.js';
import { useParams } from 'react-router';
import useObtenerGasto from '../hooks/useObtenerGasto.js';

const EditarGasto = () => {
    //obtenemos el id de la URL
    const {id} = useParams();
    //extraemos el gasto desde el hook
    const [gasto] = useObtenerGasto(id);

    return ( 
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>

            <Header>
                <BtnRegresar ruta='/lista' />
                <Titulo>Editar Gasto</Titulo>
            </Header>

            <FormularioGasto gasto={gasto} />

            <BarraTotalGastado />
        </>
     );
}
 
export default EditarGasto;
