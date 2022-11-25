    import React, { Component } from "react";
    
    export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);
    }

    sumar(e){
      console.log("Sumando")
      console.log(this);
      this.setState({
        contador:this.state.contador + 1,
      });
    }
    restar(e){
      console.log("Restando")
      console.log(this);
      this.setState({
        contador:this.state.contador - 1,
      });
    }

    render (){
        return(
            <div>
                <h2>Eventos en componente de clase ES6</h2>
                <nav>
                  <button onClick={this.sumar}>+</button>
                  <button  onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
    }

    //properties inicializer
    export class EventosES7 extends Component{
          state = {
              contador: 0,
          };
      

      //Arrow Function
      sumar =(e) =>{
        console.log("Sumando")
        console.log(this);
        this.setState({
          contador:this.state.contador + 1,
        });
      }
      restar = (e) =>{
        console.log("Restando")
        console.log(this);
        this.setState({
          contador:this.state.contador - 1,
        });
      }
  
      render (){
          return(
              <div>
                  <h2>Eventos en componente de clase ES7</h2>
                  <nav>
                    <button onClick={this.sumar}>+</button>
                    <button  onClick={this.restar}>-</button>
                  </nav>
                  <h3>{this.state.contador}</h3>
              </div>
          );
      }
    }