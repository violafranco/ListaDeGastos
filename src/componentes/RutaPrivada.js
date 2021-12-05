import React from 'react';
import { useAuth } from '../contextos/AuthContext';
import { Route, Navigate } from 'react-router';


function RutaPrivada({children, ...restoProps}) {
    const {usuario} = useAuth();
    return usuario ? children : <Navigate to="/iniciar-sesion" />;
}
 
export default RutaPrivada;