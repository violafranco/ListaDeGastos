import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';
import BarraTotalGastado from '../elementos/BarraTotalGastado.js';
import useObtenerGastoDelMesPorCategoria from '../hooks/useObtenerGastoDelMesPorCategoria.js';
import {ListaDeCategorias, ElementoListaCategorias, Categoria, Valor} from './../elementos/ElementosLista';
import formatearCantidad from '../funciones/convertirAMoneda.js';

const GastosCategoria = () => {

    let gastosPorCategoria = useObtenerGastoDelMesPorCategoria();

    return ( 
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por categoria</Titulo>
            </Header>

            <ListaDeCategorias>
                {gastosPorCategoria.map((e, index) => {
                    return(
                        <ElementoListaCategorias key={index}>
                            <Categoria>{e.categoria}</Categoria>
                            <Valor>{formatearCantidad(e.cantidad)}</Valor>
                        </ElementoListaCategorias>
                    );
                })}
            </ListaDeCategorias>

            <BarraTotalGastado />
        </>
     );
}
 
export default GastosCategoria;