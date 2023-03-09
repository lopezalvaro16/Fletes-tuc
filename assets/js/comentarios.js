function nComentario(){
  let li = document.createElement("li");
  let valoringresado = document.getElementById("nuevoComentario").value;
  let text = document.createTextNode(valoringresado);
  li.appendChild(text);

  if (valoringresado === "") {
    alert ("ingrese el comentario!")
  }
  else{
    document.getElementById("comentarios").appendChild(li);
  }

  document.getElementById("nuevoComentario").value = "";
  li.className = "comentarios";

  let borrar = document.createElement("p");
  borrar.innerHTML = ("Borrar");
  borrar.className = "close";
  li.appendChild(borrar);

  let close = document.getElementsByClassName("close");
  let i;
  for (let i = 0; i< close.length; i++) {
        close[i].onclick = function(){
          let div = this.parentElement;
          div.style.display = "none";
        }      
      }
}