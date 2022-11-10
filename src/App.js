import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";

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
      </section>
      </header>
    </div>
  );
}

export default App;