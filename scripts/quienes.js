window.onload = function(){
	var obj = new Object();
	obj.nombre = "Paola Gabriela Serrano Ramos";
	obj.imgs = "imagenes/yo.jpg";
	obj.descripcion = "Creando este sitio puedo decir que a pesar de lo que se me ha dificultado, he entendido como hacerlo. Con ayuda de las guias vistas y creadas en clases pude comprender más sobre algunos temas, expresiones regulares, DOM, también con un poco de ayuda de internet para saber cuales eran las lineas correctas para utilizar algo que se me hacia dificultuso, quise hacer el sitio con este tema ya que muchos no tomaron ningún tma informartico en sí, me parecio la idea de los android porque ultimamente se han visto muchos cambios en sus versiones muy interesantes. ";
	obj.eval = "Durante el ciclo vimos como crear sitios web, las técnicas adecuadas y muchas herramientas que nos pueden ayudar para crear las páginas web. Al terminar el ciclo aprendimos a usar estas herramientas para algún trabajo en el futuro.";
	var padre = document.getElementById("cuer");
	obj.enviar = function(){
		var lol = document.createElement("h1");
		lol.id = "lolo";
		lol.appendChild(document.createTextNode(obj.nombre));
		padre.appendChild(lol);
		var ima = document.createElement("img");
		ima.src = obj.imgs;
		padre.appendChild(ima);
		var pp = document.createElement("p");
		pp.appendChild(document.createTextNode(obj.descripcion));
		padre.appendChild(pp);
		var pp = document.createElement("p");
		pp.appendChild(document.createTextNode(obj.eval));
		padre.appendChild(pp);
	}
	obj.enviar();
	var lol = document.createElement("h1");
	lol.id = "lolo";
	lol.appendChild(document.createTextNode("Contactenos"));
	padre.appendChild(lol);
	var inps = document.createElement("input");
	inps.id = "nombre_con";
	padre.appendChild(document.createTextNode("Nombre del contacto: "));
	padre.appendChild(inps);
	padre.appendChild(document.createElement("br"));
	var inps = document.createElement("input");
	inps.id = "correo_con";
	padre.appendChild(document.createTextNode("Correo del contacto: "));
	padre.appendChild(inps);
	padre.appendChild(document.createElement("br"));
	var inps = document.createElement("input");
	inps.id = "dui_con";
	padre.appendChild(document.createTextNode("DUI del contacto: "));
	padre.appendChild(inps);
	padre.appendChild(document.createElement("br"));
	var inps = document.createElement("input");
	inps.id = "telefono_con";
	padre.appendChild(document.createTextNode("Teléfono del contacto: "));
	padre.appendChild(inps);
	padre.appendChild(document.createElement("br"));
	var binps = document.createElement("input");
	binps.type = "button";
	binps.value = "Contactar";
	padre.appendChild(binps);
	binps.onclick = function(){
		var exp_nombre = /^[a-z A-Z]{1,40}$/;
		var nomb = document.getElementById("nombre_con").value;
		if(!exp_nombre.test(nomb)){
			alert("Ingresar solo letras para el nombre del contacto");
			return;
		}
		var exp_correo = /^(\w|[\.\_]){1,}[@](\w|[\.\_]){1,}$/;
		var correo = document.getElementById("correo_con").value;
		if(!exp_correo.test(correo)){
			alert("Escriba un correo valido.");
			return;
		}
		var exp_dui = /^\d{8}[\-]\d{1}$/;
		var iden = document.getElementById("dui_con").value;
		if(!exp_dui.test(iden)){
			alert("Escriba un DUI valido.");
			return;
		}
		var exp_tel = /^\d{4}[\-]\d{4}$/;
		var tel = document.getElementById("telefono_con").value;
		if(!exp_tel.test(tel)){
			alert("Escriba un teléfono valido en El Salvador.");
			return;
		}
		alert("Sus datos han sido enviados correctamente.")
	}
}