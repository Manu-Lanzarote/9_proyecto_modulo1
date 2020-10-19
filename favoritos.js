let resultadosFavoritos = JSON.parse(localStorage.getItem("favoritos"));

for (let i = 0; i < resultadosFavoritos.length; i++) {
  document.getElementById("div2").innerHTML += `<div class="recetas">
  <div id ="foto"><img src="${resultadosFavoritos[i].thumbnail}" alt="Plato del día"><div><br>
  <h2>${resultadosFavoritos[i].title}</h2>
  <span class = "subtit">Sitio web: <a href="${resultadosFavoritos[i].href}" target="_blank">"${resultadosFavoritos[i].href}"</a></span>
  <p><span class = "subtit">Ingredientes:</span> ${resultadosFavoritos[i].ingredients}</p>
  <br>
  <p>* * * * *</p>
  <br><br>
  </div>`;
}
