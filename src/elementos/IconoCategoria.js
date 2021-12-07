import React from 'react';
import {ReactComponent as IconComida} from './../images/comida.svg';
import {ReactComponent as IconCompras} from './../images/compras.svg';
import {ReactComponent as IconCuentasYPagos} from './../images/cuentasYpagos.svg';
import {ReactComponent as IconDiversion} from './../images/diversion.svg';
import {ReactComponent as IconHogar} from './../images/hogar.svg';
import {ReactComponent as IconRopa} from './../images/ropa.svg';
import {ReactComponent as IconSaludEHigiene} from './../images/salud.svg';
import {ReactComponent as IconTransporte} from './../images/transporte.svg';

const IconoCategoria = ({nombre}) => {
    switch(nombre) {
        case 'comida':
            return <IconComida />
        case 'compras':
            return <IconCompras />
        case 'cuentas y pagos':
            return <IconCuentasYPagos />
        case 'diversion':
            return <IconDiversion />
        case 'hogar':
            return <IconHogar />
        case 'ropa':
            return <IconRopa />
        case 'salud e higiene':
            return <IconSaludEHigiene />
        case 'transporte':
            return <IconTransporte />
        default:
            break;
    }
}
 
export default IconoCategoria;


