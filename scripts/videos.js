var obj = new Array();
obj[0] = "http://www.youtube.com/embed/8D4vNzSa-5w";
obj[1] = "http://www.youtube.com/embed/qqp0uo6geAo";
obj[2] = "http://www.youtube.com/embed/e9HBoKfM8ak";

window.onload = function(){
	madre = document.getElementById("cuer");
	for(i = 0; i < 3; i++) {
		var lol = document.createElement("h1");
		lol.id = "lolo";
		lol.appendChild(document.createTextNode("Vídeo " + Number(i + 1)));
		madre.appendChild(lol);
		var vidio = document.createElement("iframe");
		madre.appendChild(vidio);
		vidio.style.width = "530px";
		vidio.style.height = "360px";
		vidio.setAttribute("frameborder", 0);
		vidio.setAttribute("allowfullscreen", "");
		vidio.src = obj[i];
		madre.appendChild(document.createElement("br"));
		//<iframe id="videos" src="http://www.youtube.com/embed/0jNT5cMwxw0" frameborder="0" allowfullscreen></iframe>
	}
}