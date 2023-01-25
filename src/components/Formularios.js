import React, { useState } from 'react';


/*
export default function Formularios(){
    const [nombre, setNomnre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) =>{
      e.preventDefault();
      alert("El Formulario Ha Sido Enviado");    
    };

    return(
        <>
          <h2>Formularios</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={nombre}
            onChange={(e) => setNomnre(e.target.value)}
            />
            <p>Elije tu savor JS favorito:</p>
            <input 
              type="radio" 
              id="vailla" 
              name="sabor" 
              value="vailla" 
              onChange={e=>setSabor(e.target.value)}
            />
            <label htmlFor="vailla">Vanilla</label>
            <input 
              type="radio" 
              id="react" 
              name="sabor" 
              value="react" 
              onChange={e=>setSabor(e.target.value)}
            />
            <label htmlFor="react">React</label>
            <input 
              type="radio" 
              id="angular" 
              name="sabor" 
              value="angular" 
              onChange={e=>setSabor(e.target.value)}
            />
            <label htmlFor="angulaar">Angular</label>
            <input 
              type="radio" 
              id="vue" 
              name="sabor" 
              value="vue" 
              onChange={e=>setSabor(e.target.value)} 
              defaultChecked
            />
            <label htmlFor="vue">Vue</label>
            <input 
              type="radio" 
              id="svelte" 
              name="sabor" 
              value="svelte" 
              onChange={e=>setSabor(e.target.value)}
            />
            <label htmlFor="svelte">Svelte</label>
            <input 
              type="radio" 
              id="" 
              name="sabor" 
              value="" 
              onChange={e=>setSabor(e.target.value)}
            />
            <label htmlFor=""></label>
            <p>Elige tu lenguaje favorito</p>
            <select name="lenguaje" onChange={e=>setLenguaje(e.target.value)} defaultValue="">
              <option value="">-----</option>
              <option value="js">JavaScript</option> 
              <option value="php">PHP</option>
              <option value="py">Python</option>
              <option value="go">GO</option>
              <option value="rb">Ruby</option>
            </select>
              <br/>
              <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
              <input 
                type="checkbox" 
                id="terminos" 
                name="terminos"
                onChange={(e)=>setTerminos(e.target.checked)}
              />
              <br/>
              <input type="submit"/>
          </form>
        </>
    );
}
*/
export default function Formularios(){
    const [form, setForm] = useState({});

    const handleChange = (e) =>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      });
    };

    const handleChecked = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.checked,
        });
      };

    const handleSubmit = (e) =>{
      e.preventDefault();
      alert("El Formulario Ha Sido Enviado");    
    };

    return(
        <>
          <h2>Formularios</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={form.nombre}
            onChange={handleChange}
            />
            <p>Elije tu savor JS favorito:</p>
            <input 
              type="radio" 
              id="vailla" 
              name="sabor" 
              value="vailla" 
              onChange={handleChange}
            />
            <label htmlFor="vailla">Vanilla</label>
            <input 
              type="radio" 
              id="react" 
              name="sabor" 
              value="react" 
              onChange={handleChange}
            />
            <label htmlFor="react">React</label>
            <input 
              type="radio" 
              id="angular" 
              name="sabor" 
              value="angular" 
              onChange={handleChange}
            />
            <label htmlFor="angulaar">Angular</label>
            <input 
              type="radio" 
              id="vue" 
              name="sabor" 
              value="vue" 
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="vue">Vue</label>
            <input 
              type="radio" 
              id="svelte" 
              name="sabor" 
              value="svelte" 
              onChange={handleChange}
            />
            <label htmlFor="svelte">Svelte</label>
            <input 
              type="radio" 
              id="" 
              name="sabor" 
              value="" 
              onChange={handleChange}
            />
            <label htmlFor=""></label>
            <p>Elige tu lenguaje favorito</p>
            <select name="lenguaje" onChange={handleChange} defaultValue="">
              <option value="">-----</option>
              <option value="js">JavaScript</option> 
              <option value="php">PHP</option>
              <option value="py">Python</option>
              <option value="go">GO</option>
              <option value="rb">Ruby</option>
            </select>
              <br/>
              <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
              <input 
                type="checkbox" 
                id="terminos" 
                name="terminos"
                onChange={handleChecked}
              />
              <br/>
              <input type="submit"/>
          </form>
        </>
    );
}