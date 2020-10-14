//TODOCreo una variable que igualo a un string vacio para obtener los resultados de las consultas

/////////// Url de ejemplo proporcionada por la API:
/////////// http://www.recipepuppy.com/api/?i=onions,garlic,beef"

// URL base
let url = `http://www.recipepuppy.com/api/?i=`;

let receta = "";
fetch("http://www.recipepuppy.com/api/?i=onions,garlic,beef")
  .then(function recogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function recogerDatos(datos) {
    console.log(datos);
    console.log(datos.results);
    console.log(datos.results[1].title);

    //Como tengo un array voy a recorrerlo con un for para mostrar los resultados

    for (let i = 0; i < datos.results.length; i++) {
      receta += `<div class="recetas">
  <div id = "foto"><img src="${datos.results[i].thumbnail}" alt="Plato del día"><div>
  <h2>${datos.results[i].title}</h2>
  <span class = "subtit">Sitio web: <a href="">"${datos.results[i].href}"</a></span>
  <p><span class = "subtit">Ingredientes:</span> ${datos.results[i].ingredients}</p>
  <br><br>
  </div>
  `;
    }
    document.getElementById("receta").innerHTML = receta;
  });
