//llamando por id
let botonon = document.getElementById("btnon");
//cambiar el texto del boton
botonon.innerHTML = "Encender";

let botonoff = document.getElementById("btnoff");
botonoff.innerHTML = "Apagar";
//cambiar el color del boton

function encederfoco() {
  let boton = (document.getElementById("foto").src = "img/on.jpg");
}

function apagarfoco() {
  let boton = (document.getElementById("foto").src = "img/off.jpg");
}

//document.getElementById("bloqueCentral").setAttribute("align", "center");
//<body class="vh-100 row m-0 text-center align-items-center justify-content-center"></body>
