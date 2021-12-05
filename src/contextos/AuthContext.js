import React, { useContext, useEffect, useState } from 'react';
import {auth} from '../firebase/firebaseConfig'

//Creamos el contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState();

    //Este state se usa para saber cuando termina de cargar onAuthStateChanged
    const [cargando, setCargando] = useState(true);

    //Lo usamos para ejecutar la comprobación una sola vez
    useEffect(() => {
        //Comprobamos si hay un usuario
        const cancelarSuscripcion = auth.onAuthStateChanged((usuarioDatos) => {
            setUsuario(usuarioDatos);
            setCargando(false)
        });

        //hace que se cierre la sesión
        return cancelarSuscripcion;
    }, []);

    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
            {/*Retornamos toda la app(children) cuando no este cargando, 
            asi nos aseguramos que el usuario exite*/}
            {!cargando && children}
        </AuthContext.Provider>
     );
}
 
export {AuthProvider, AuthContext, useAuth};