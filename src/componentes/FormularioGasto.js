import React, {useState} from 'react';
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormularios';
import Boton from '../elementos/Boton';
import {ReactComponent as IconPLus} from './../images/plus.svg';

const FormularioGasto = () => {
    //Estados para pasarle a los inputs y manipularlos
    const [inputDescripcion, setInputDescripcion] = useState();
    const [inputCantidad, setinputCantidad] = useState();

    //creamos el handle para manipularlos
    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            setInputDescripcion(e.target.value)
        } else if(e.target.name === 'cantidad') {
            setinputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    return ( 
        <Formulario>
            <ContenedorFiltros>
                <p>Select</p>
                <p>Date picker</p>
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
                <Boton as='button' primario conIcono type='submit'>Agregar gasto <IconPLus /></Boton>
            </ContenedorBoton>
        </Formulario>
     );
}
 
export default FormularioGasto;