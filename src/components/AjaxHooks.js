import React, { useState, useEffect } from "react"; //imrse

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  /* useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              //Destructura lo que ya trae la variable pokemon mas el pokemon que agregue arriba.
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);
*/

  //con fetch + async. Nunca hagas un useEfect asincrono, es un antipatron NO ESTO -->useEffect (async ()=>) NUNCA

  //Usar esta funcion!
  useEffect(() => {
    //Para realizar una llamada asincrona, se hace de la sig manera.

    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        //Destructura lo que ya trae la variable pokemon mas el pokemon que agregue arriba.
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el,index) => (
          <Pokemon key={index} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
