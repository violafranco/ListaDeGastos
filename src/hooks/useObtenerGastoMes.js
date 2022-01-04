import { useEffect, useState } from "react/cjs/react.development";
import {db} from './../firebase/firebaseConfig';
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import {useAuth} from './../contextos/AuthContext'

const useObtenerGastoMes = () => {
    const [gastos, setGastos] = useState([]);
    const {usuario} = useAuth();

    useEffect(() => {  
        const inicioMes = getUnixTime(startOfMonth(new Date()));
        const finMes = getUnixTime(endOfMonth(new Date()));

        if(usuario){
            const unsuscribe = db.collection('gastos')
            .orderBy('fecha', 'desc')
            .where('fecha', '>=', inicioMes)
            .where('fecha', '<=', finMes)
            .where('uidUsuario', '==', usuario.uid)
            .onSnapshot((snapshot) => {
                setGastos(snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                }))
            })

            return unsuscribe;
        }
    }, [usuario])
    
    return gastos;
}
 
export default useObtenerGastoMes;