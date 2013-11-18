if(localStorage.lili != "true") {
	localStorage.lili = "false";
}
window.onload = function(){
	if(localStorage.lili == "true"){
		var padre = document.getElementById("loggi");
		while(padre.hasChildNodes()){
			padre.removeChild(padre.lastChild);
		}
		padre.appendChild(document.createTextNode("Log Out"));
		var titulo = document.getElementById("lolo");
		while(titulo.hasChildNodes()){
			titulo.removeChild(titulo.lastChild);
		}
		titulo.appendChild(document.createTextNode("Inicio, Bienvenido: " + localStorage.nombre));
	}
}

function logIn() {
	if(localStorage.lili == "false"){
		localStorage.nombre = prompt("Ingrese su nombre: ", "");
		alert("El nombre con el que ingreso es: " + localStorage.nombre);
		var titulo = document.getElementById("lolo");
		while(titulo.hasChildNodes()){
			titulo.removeChild(titulo.lastChild);
		}
		titulo.appendChild(document.createTextNode("Inicio, Bienvenido: " + localStorage.nombre));
		localStorage.lili = "true";
	} else if(localStorage.lili == "true"){
		localStorage.lili = "false";
	}
	if(localStorage.lili == "true"){
		var padre = document.getElementById("loggi");
		while(padre.hasChildNodes()){
			padre.removeChild(padre.lastChild);
		}
		padre.appendChild(document.createTextNode("Log Out"));
	} else if(localStorage.lili == "false"){
		var titulo = document.getElementById("lolo");
		while(titulo.hasChildNodes()){
			titulo.removeChild(titulo.lastChild);
		}
		titulo.appendChild(document.createTextNode("Inicio, No ha hecho logIn"));
		var padre = document.getElementById("loggi");
		while(padre.hasChildNodes()){
			padre.removeChild(padre.lastChild);
		}
		padre.appendChild(document.createTextNode("Log In"));
	}
}

function irAQuienes(){
	if(localStorage.lili == "true"){
		window.location = "quienessomos.html";
	} else {
		alert("Debe hacer Log In para ingresar a las demás secciones del sitio :)");
	}
}

function irAHistoria(){
	if(localStorage.lili == "true"){
		window.location = "historia.html";
	} else {
		alert("Debe hacer Log In para ingresar a las demás secciones del sitio :)");
	}
}

function irAVideos(){
	if(localStorage.lili == "true"){
		window.location = "videos.html";
	} else {
		alert("Debe hacer Log In para ingresar a las demás secciones del sitio :)");
	}
}