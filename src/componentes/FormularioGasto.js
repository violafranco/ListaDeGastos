import React, {useState, useEffect} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormularios';
import Boton from '../elementos/Boton';
import {ReactComponent as IconPLus} from './../images/plus.svg';
import SelectCategorias from '../elementos/SelectCategoria';
import DatePicker from '../elementos/DatePicker';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import agregarGasto from '../firebase/agregarGasto';
import {useAuth} from './../contextos/AuthContext';
import Alerta from './../elementos/Alerta';
import { useNavigate } from 'react-router-dom';
import editarGasto from '../firebase/editargasto';

const FormularioGasto = ({gasto}) => {
    //Estados para pasarle a los inputs y manipularlos
    const [inputDescripcion, setInputDescripcion] = useState();
    const [inputCantidad, setinputCantidad] = useState();

    //Estados para el selectCategoria
    const [categoria, setCategoria] = useState('hogar');

    //Estados para la fecha
    const [fecha, setFecha] = useState(new Date());

    //Creamos el acceso a los daots del usuario
    const {usuario} = useAuth();

    const navigate = useNavigate();

    //Comprobamos si tenemos algun gasto agregado
    useEffect(() => {
        if(gasto){
            //Comprobamos si el gasto es del usuario actual, entonces usamos el uid
            if(gasto.data().uidUsuario === usuario.uid){
                setCategoria(gasto.data().categoria)
                setFecha(fromUnixTime(gasto.data().fecha))
                setInputDescripcion(gasto.data().inputDescripcion)
                setinputCantidad(gasto.data().inputCantidad)
            } else {
                navigate('/lista');
            }
        }
    }, [gasto, usuario, navigate]);

    //Estados de la alerta
    const [estadoalerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    //creamos el handle para manipularlos
    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            setInputDescripcion(e.target.value)
        } else if(e.target.name === 'cantidad') {
            setinputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Transformamos la cantidad en numero y le pasamos 2 decimales
        let monto = parseFloat(inputCantidad).toFixed(2);

        if(gasto){
            editarGasto({
                id: gasto.id,
                categoria: categoria,
                descripcion: inputDescripcion,
                cantidad: monto,
                fecha: getUnixTime(fecha)
            }).then(() => {
                navigate('/lista');
            });
        } else { 
            //Comprobamos que haya descripción y valor
            agregarGasto({
                categoria: categoria,
                descripcion: inputDescripcion,
                cantidad: monto,
                fecha: getUnixTime(fecha),
                uidUsuario: usuario.uid
            })
            .then(() => {
                setCategoria('hogar');
                setInputDescripcion('');
                setinputCantidad('');
                setFecha(new Date());

                setEstadoAlerta(true)
                setAlerta({tipo: 'exito', mensaje: 'El gasto se agregó correctamente'})
            })
            .catch((error) => {
                setEstadoAlerta(true)
                setAlerta({tipo: 'error', mensaje: 'Hubo un probelma al intentar agregar el gasto, intenta nuevamente'})
            })
        }

    }

    return ( 
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias 
                   categoria={categoria}
                   setCategoria={setCategoria}
                />
                <DatePicker 
                    fecha={fecha}
                    setFecha={setFecha}
                />
            </ContenedorFiltros>

            <div>
                <Input 
                    type='text'
                    name='descripcion'
                    placeholder='Describe el gasto'
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande
                    type='text'
                    name='cantidad'
                    placeholder='$0'
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </div>

            <ContenedorBoton>
                <Boton as='button' primario conIcono type='submit'>
                {gasto ? 'Editar Gasto' : 'Agregar Gasto'}<IconPLus /></Boton>
            </ContenedorBoton>

            <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoalerta}
                setEstadoAlerta={setEstadoAlerta}
            />
        </Formulario>
     );
}
 
export default FormularioGasto;