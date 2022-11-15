import React, {Component} from "react";
import data from "../helpers/data.json"

function ElementoLista(props){
 return(
  <li>
    <a href={props.el.web} target="_blank">{props.el.name}</a>
  </li>
 )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seassons: ["Primavera","Verano","Otoño","Invierno"]
        }
    }
    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                  {this.state.seassons.map((el,index) => (
                    <li key={index}>{el}</li>
                  ))}  
                </ol>
                <h3>Framework Frontend JavaScript</h3>
                <ul>
                  {
                    data.Frameworks.map((el) => (<ElementoLista key={el.id} el={el}/>))
                  }  
                </ul>
            </div>
        )
    }
} 