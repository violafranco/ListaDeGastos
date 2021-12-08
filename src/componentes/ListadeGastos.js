import React from 'react';
import {Header, Titulo} from './../elementos/Header.js';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar.js';
import BarraTotalGastado from '../elementos/BarraTotalGastado.js';
import useObtenerGastos from '../hooks/useObtenerGastos.js';
import IconoCategoria from './../elementos/IconoCategoria';
import { Lista, ElementoLista, Categoria,
    Descripcion, Valor, Fecha, ContenedorBotones, BotonAccion, BotonCargarMas,
    ContenedorBotonCentral, ContenedorSubtitulo, Subtitulo } from '../elementos/ElementosLista.js';
import styled from 'styled-components';
import convertirAMoneda from './../funciones/convertirAMoneda';
import {ReactComponent as IconEditar} from './../images/editar.svg';
import {ReactComponent as IconBorrar} from './../images/borrar.svg';
import { Link } from 'react-router-dom';
import Boton from './../elementos/Boton';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';

const Opcion = styled.div`
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
`;

const ListadeGastos = () => {

    const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos();

    //funcion para foormatear fecha
    const formatearFecha = (fecha) => {
        return format( fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {locale: es} );
    }

    const fechaIgual = (gastos, index, gasto) => {
        if(index !== 0){
            const fechaActual = formatearFecha(gasto.fecha);
            const fechaAnterior = formatearFecha(gastos[index -1].fecha);

            if(fechaActual === fechaAnterior){
                return true;
            } else {
                return false;
            }
        }
    }
    
    return ( 
        <>
            <Helmet>
                <title>Lista de gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de gastos</Titulo>
            </Header>

            <Lista>
                {gastos.map((gasto, index) => {
                    return(
                        <div key={gasto.id}>
                            {!fechaIgual(gastos, index, gasto) 
                                && 
                                <Fecha>{formatearFecha(gasto.fecha)}</Fecha>
                            }
                            

                            <ElementoLista key={gasto.id}>
                                <Categoria>
                                    <Opcion>
                                        <IconoCategoria nombre={gasto.categoria} />
                                    </Opcion>
                                    {gasto.categoria}
                                </Categoria>

                                <Descripcion>
                                    {gasto.descripcion}
                                </Descripcion>

                                <Valor>{convertirAMoneda(gasto.cantidad)}</Valor>
                            
                                <ContenedorBotones>
                                    <BotonAccion as={Link} to={`/editar/${gasto.id}`} >
                                        <IconEditar/>
                                    </BotonAccion>
                                    <BotonAccion>
                                        <IconBorrar/>
                                    </BotonAccion>
                                </ContenedorBotones>
                            
                            </ElementoLista>
                        </div>
                    );
                })}

                {hayMasPorCargar &&
                    <ContenedorBotonCentral>
                    <BotonCargarMas onClick={() => obtenerMasGastos()}>Cargar Más</BotonCargarMas>
                </ContenedorBotonCentral>
                }

                {gastos.length == 0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos por mostrar</Subtitulo>
                        <Boton as={Link} to='/'>Agregar Gasto</Boton>
                    </ContenedorSubtitulo>
                }
            </Lista>

            <BarraTotalGastado />
        </>
     );
}

 
export default ListadeGastos;