import React from 'react';
import { useAuth } from '../contextos/AuthContext';
import { Navigate } from 'react-router';


function RutaPrivada({children}) {
    const {usuario} = useAuth();
    return usuario ? children : <Navigate to="/iniciar-sesion" />;
}
 
export default RutaPrivada;