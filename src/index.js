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
import {AuthProvider} from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada'

ReactDOM.render(
  <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="icon" />
    </Helmet>

    <AuthProvider>
        <BrowserRouter>
          <React.StrictMode>
            <Contenedor>
              <Routes>
                <Route path="/iniciar-sesion" element={< IniciarSesion/>} />
                <Route path="/crear-cuenta" element={< Registro />} />

                <Route
                  path="/"
                  element={
                    <RutaPrivada>
                       <App />
                    </RutaPrivada>
                }/>
                <Route
                  path="/categorias"
                  element={
                    <RutaPrivada>
                       <GastosCategoria />
                    </RutaPrivada>
                }/>
                <Route
                  path="/lista"
                  element={
                    <RutaPrivada>
                       <ListadeGastos />
                    </RutaPrivada>
                }/>
                <Route
                  path="/editar/:id"
                  element={
                    <RutaPrivada>
                       <EditarGastos />
                    </RutaPrivada>
                }/>

              </Routes>
            </Contenedor>
          </React.StrictMode>
        </BrowserRouter>
    </AuthProvider>

    <FondoPuntos />
  </>
,
  document.getElementById('root')
);
