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