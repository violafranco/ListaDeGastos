import React, { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useObtenerGastoMes from '../hooks/useObtenerGastoMes';

const TotalGastadoContext = React.createContext();

const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({children}) => {
    const [total, setTotal] = useState(0);
    const gastos = useObtenerGastoMes();

    useEffect(() => {
        let acumulado = 0;
        gastos.forEach((gasto) => {
            acumulado += gasto.cantidad
        })
        setTotal(acumulado);
    }, [gastos]);

    return(
        <TotalGastadoContext.Provider value={{total: total}} >
            {children}
        </TotalGastadoContext.Provider>
    );
}

export {TotalGastadoProvider, useTotalDelMes};