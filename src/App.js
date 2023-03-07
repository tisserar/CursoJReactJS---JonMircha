import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6,EventosES7,MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola Soy un componente funcional Expresado desde una prop"/>
        <hr></hr>
        <Propiedades 
          cadena="Esto es una cadena de Texto" 
          numero = {19} 
          booleano = {false}
          arreglo = {[1,2,3]}
          objeto = {{nombre:"Rodrigo",correo:"rodrigo.tissera@gmail.com"}}
          elementoReact = {<i>Esto es un elemento React</i>}
          funcion = {num => num*num}
          componenteReact = {<Componente msg="Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks titulo="Seguidores"/>
        <hr/>
        <ScrollHooks/>
        <hr/>
        <RelojHooks/>
        <hr/>
        <AjaxHooks/>
        <hr/>
        <HooksPersonalizados/>
        <hr/>
        <Referencias/>
        <hr/>
        <Formularios/>
        <hr/>
        <Estilos/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
      </header>
    </div>
  );
}

export default App;
