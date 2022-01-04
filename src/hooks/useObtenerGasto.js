import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router";

const useObtenerGasto = (id) => {

    //obtengo el navigate
    const navigate = useNavigate();
    
    const [gasto, setGasto] = useState('');
        
    //Nos conectamos una sola vez a la base de dato
    useEffect(() => {
        db.collection('gastos').doc(id).get()
        .then((doc) => {
            if(doc.exists){
                setGasto(doc);
            } else {
                navigate('/lista')
            }
        })
    }, [navigate, id]);
    
    
    return [gasto];
}
 
export default useObtenerGasto;