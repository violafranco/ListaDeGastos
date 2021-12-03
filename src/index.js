import React from 'react';
import ReactDOM from 'react-dom';
import  {  BrowserRouter ,  Route , Routes  }  from  'react-router-dom' ;
import './index.css';
import App from './App';
import Contenedor from './elementos/Contenedor';
import EditarGastos from './componentes/EditarGastos';
import GastosCategoria from './componentes/GastosCategoria';
import IniciarSesion from './componentes/IniciarSesion';
import ListadeGastos from './componentes/ListadeGastos';
import Registro from './componentes/Registro';
import FondoPuntos from './elementos/Fondo';
import {Helmet} from "react-helmet";
import favicon from './images/favicon.ico' ;

ReactDOM.render(
  <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="icon" />
    </Helmet>
    <BrowserRouter>
      <React.StrictMode>
        <Contenedor>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/iniciar-sesion" element={< IniciarSesion/>} />
            <Route path="/crear-cuenta" element={< Registro />} />
            <Route path="/categorias" element={< GastosCategoria/>} />
            <Route path="/lista" element={< ListadeGastos/>} />
            <Route path="/editar/:id" element={< EditarGastos/>} />
          </Routes>
        </Contenedor>
      </React.StrictMode>
  </BrowserRouter>
  <FondoPuntos />
  </>
,
  document.getElementById('root')
);
