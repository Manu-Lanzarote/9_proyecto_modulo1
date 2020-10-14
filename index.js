//Creo una función para obtener la información solicitada a la API y a la que llamré en HTML con
// <button onclick="verRecetas()">Ver recetas</button>

function verRecetas() {
  //Recojo los datos del input y los guardo en una variable
  userIngredientes = document.getElementById("ingredientes").value;

  //Integro estos datos en la url que usaré para extraer los resultados de la API
  let url = `http://www.recipepuppy.com/api/?i=${userIngredientes}`;
  //Compruebo
  //console.log(url);

  fetch(url)
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerDatos(datos) {
      //Compruebo que los datos llegan correctamente
      //   console.log(datos);
      console.log(datos.results);
      //   console.log(datos.results[1].title);

      //He visto en POSTMAN que la API me devuelve un array de 10 objetos, así que los recorreré con un for para imprimir los resultados en pantalla.
      //Para ello creo una variable vacía tipo string ANTES DEL FOR donde iré guardando los datos resultantes de cada ciclo.
      let recetas = "";
      for (let i = 0; i < datos.results.length; i++) {
        recetas += `<div class="recetas">
        <div id = "foto"><img src="${datos.results[i].thumbnail}" alt="Plato del día"><div><br>
        <h2>${datos.results[i].title}</h2>
        <span class = "subtit">Sitio web: <a href="${datos.results[i].href}" target="_blank">"${datos.results[i].href}"</a></span>
        <p><span class = "subtit">Ingredientes:</span> ${datos.results[i].ingredients}</p>
        <br>
        <p>*****</p>
        <br><br>
        </div>
        `;
      }
      //Por último, queda devolver los resultados de la consulta, por lo que he creado en HTML el div:
      //  <div id="receta">DESCRIPCIÓN</div> donde los insertaré.
      document.getElementById("receta").innerHTML = recetas;
      console.log(recetas);
    });
}
