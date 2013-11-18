var it1 = 1;
var it2 = 11;
$(document).on("ready", function(){
	var madre = $("#cuer");
	madre.append($("<p>", {text: "Android en un Sistema Operativo además de una plataforma de Software basada en el núcleo de Linux. Diseñada en un principio para dispositivos móviles, Android permite controlar dispositivos por medio de bibliotecas desarrolladlas o adaptados por Google mediante el lenguaje de programación Java."}));
	madre.append($("<p>", {text: "Android es una plataforma de código abierto. Esto quiere decir, que cualquier desarrollador puede crear y desarrollar aplicaciones escritas con lenguaje C u otros lenguajes y compilarlas a código nativo de ARM (API de Android). La idea era tener un nuevo software para dispositivos móviles con pantalla táctil como son los teléfonos inteligentes y las tablets. El sistema fue desarrollado por Android, Inc. El desarrollador fue Andy Rubin que  Google respaldó económicamente en su momento y que más tarde compró en el 2005. La compañía original era de Palo Alto, California (fundada en 2003). Entre los cofundadores de Android que se fueron a trabajar a Google están Andy Rubin (co-fundador de Danger), Rich Miner (co-fundador de Wildfire Communications, Inc.), Nick Sears (alguna vez VP en T-Mobile), y Chris White (quien encabezó el diseño y el desarrollo de la interfaz en WebTV). Android se presentó en el 2007 junto con la Open Handset Alliance, un consorcio de compañías de hardware, software y telecomunicaciones, con la intención de avanzar en los estándares de los sistemas abiertos. El nombre Android hacen alusión a la novela de Philip K. Dick ¿Sueñan los androides con ovejas eléctricas?, que posteriormente fue adaptada al cine como Blade Runner. Tanto el libro como la película se centran en un grupo de androides llamados replicantes del modelo Nexus-6. El nombre del logotipo es Andy."}));
	madre.append($("<div>", {id: "lepane"}));
	$("#lepane").append($("<div>", {id: "men"}));
	$("#lepane").append($("<div>", {id: "rightmost"}));
	$("#lepane").append($("<div>", {id: "leftmen"}));
	$("#men").append($("<h4>", {id: "menItem1", text: "Android 1.0"}));
	$("#men").append($("<h4>", {id: "menItem2", text: "Android 2.0"}));
	$("#men").append($("<h4>", {id: "menItem3", text: "Android 3.0"}));
	$("#men").append($("<h4>", {id: "menItem4", text: "Android 4.0"}));
	$("#menItem1").hover(function(){
		it1 = 1;
		setItems();
	});
	$("#menItem2").hover(function(){
		it1 = 2;
		setItems();
	});
	$("#menItem3").hover(function(){
		it1 = 3;
		setItems();
	});
	$("#menItem4").hover(function(){
		it1 = 4;
		setItems();
	});
	setItems();
	setContent();
});

function setItems(){
	switch(it1){
		case 1:
			$("#rightmost").empty();
			$("#rightmost").append($("<h3>", {id: "i11", text: "Apple Pie"}));
			$("#rightmost").append($("<h3>", {id: "i12", text: "Banana Bread"}));
			$("#rightmost").append($("<h3>", {id: "i13", text: "Cupcake"}));
			$("#rightmost").append($("<h3>", {id: "i14", text: "Donut"}));
			$("#i11").hover(function(){
				it2 = 11;
				setContent();
			});
			$("#i12").hover(function(){
				it2 = 12;
				setContent();
			});
			$("#i13").hover(function(){
				it2 = 13;
				setContent();
			});
			$("#i14").hover(function(){
				it2 = 14;
				setContent();
			});
			break;
		case 2:
			$("#rightmost").empty();
			$("#rightmost").append($("<h3>", {id: "i21", text: "Éclair"}));
			$("#rightmost").append($("<h3>", {id: "i22", text: "Frozen Yogurt"}));
			$("#rightmost").append($("<h3>", {id: "i23", text: "Gingerbread"}));
			$("#i21").hover(function(){
				it2 = 21;
				setContent();
			});
			$("#i22").hover(function(){
				it2 = 22;
				setContent();
			});
			$("#i23").hover(function(){
				it2 = 23;
				setContent();
			});
			break;
		case 3:
			$("#rightmost").empty();
			$("#rightmost").append($("<h3>", {id: "i31", text: "Honeycomb"}));
			$("#i31").hover(function(){
				it2 = 31;
				setContent();
			});
			break;
		case 4:
			$("#rightmost").empty();
			$("#rightmost").append($("<h3>", {id: "i41", text: "IceCreamSand"}));
			$("#rightmost").append($("<h3>", {id: "i42", text: "Jelly Bean"}));
			$("#rightmost").append($("<h3>", {id: "i43", text: "KitKat"}));
			$("#i41").hover(function(){
				it2 = 41;
				setContent();
			});
			$("#i42").hover(function(){
				it2 = 42;
				setContent();
			});
			$("#i43").hover(function(){
				it2 = 43;
				setContent();
			});
			break;
		default:
			break;
	}
}

function setContent(){
	switch(it2){
		case 11:
			//ApplePie
			alojar("1.0 - Apple Pie", "Android 1.0 Apple Pie fue la primera versión de Android comercial lanzada y este lanzamiento se realizó junto al HTC Dream el 23 septiembre de 2008. Como es lógico, ésta fue la versión de Android con un mayor número de novedades e incorporaciones de todas las vividas en la evolución y crecimiento de Android pues sentaba las bases para el comienzo de un nuevo sistema operativo a nivel comercial. Las novedades e incorporaciones más destacadas de Android 1.0 fueron: Incorporación de un mercado para compra y descarga de aplicaciones bajo el nombre de Android Market. Un navegador web con soporte multiples ventanas y capaz de abrir páginas web en HTML y XHTML. Soporte básico para cámara de fotos. Posibilidad de crear carpetas e introducir iconos de aplicaciones en ellas desde el escritorio. Acceder a servidores de correo electrónico por web soportando los protocolos POP3, IMAP4 y SMTP. Sincronización con los productos de Google: Gmail, Google Calendar y Google Contacts. Entre otros.", "imagenes/apple.jpg");
			break;
		case 12:
			//BananaBread
			alojar("1.1 - Banana Bread", "Fue una pequeña actualización publicada el 9 de febrero de 2009, además, al existir en ese momento únicamente el HTC Dream, esta actualización estaba orientada exclusivamente a este terminal resolviendo pequeños errores detectados, mejorando y cambiando la API y añadiendo una serie de nuevas características. Nuevas características: Añadidos detalles y reseñas sobre lugares y negocios en Google Maps. Cambio en la pantalla en llamada así como nueva pantalla en caso de uso de manos libres y posibilidad de mostrar-ocultar el teclado numérico. Posibilidad de guardar archivos adjuntos en los mensajes. Soporte para marquesina en diseños del sistema.", "imagenes/banana.jpg");
			break;
		case 13:
			//Cupcake
			alojar("1.5 - Cupcake", "Con la introducción de Android 1.5 el 30 de abril de 2009, empezamos a oír el nombre de Cupcake en referencia a la primera actualización importante del sistema operativo de Google. Esta actualización le dio un poco más pulido a Android en algunas áreas pero sus principales características fueron la introducción del teclado virtual en la pantalla (todavía malo) y la posibilidad de insertar widgets. Sin bien los Widgets ya venían implementándose en en otros sistemas operativos móviles, como el Samsung TouchWiz, ninguno había sido tan convincente como la aplicación de estos por Android. Claro que le tomó bastante tiempo tener una selección decente de widgets disponibles, pero que finalmente prendió y a decir verdad estos son uno de los grandes diferenciadores para Android, y una de las funciones en las que Google viene trabajando. Ademas se incluyeron otras funciones bastante demandadas por los usuarios como copiar y pegar en el navegador, la grabación de vídeo y reproducción en formatos MPEG-4 y 3GP, la capacidad de subir videos a YouTube directamente, transiciones animadas entre las pantallas, la opción de auto-rotacion, auto-sincronización y soporte para Bluetooth A2DP y AVRCP.", "imagenes/cupcake.jpg");
			break;
		case 14:
			//Donut
			alojar("1.6 - Donut", "Android 1.6, también conocido como Donut . Esta versión fue en realidad una pequeña actualización, pero vino empaquetaba con un cuadro de búsqueda mejorado, cámara y aplicación de galería, y una renovada Android Market. La barra de búsqueda, que inicialmente tenía sólo para buscar en la web, ahora le permitía al usuario buscar en otros lugares dentro del dispositivo, como marcadores, contactos, aplicaciones, y mucho más, directamente desde la pantalla principal. El cambio mas notable en Donut fue el Android Market que en ese momento renovó su diseño con con colores verde y blanco frente a la mirada gris y negro de las versiones anteriores. La nueva tienda resulto un poco mas amigable, rompiendo las solicitudes de pago, gratis, y “just in” mientras que también soportaba las capturas de pantalla de las aplicación seleccionada, una característica muy solicitada. La aplicación de la cámara también vio una remodelación, y si bien no era la más bonita, era todavía un paso adelante respecto a lo que estábamos trabajando con anterioridad.Ahora un usuario podía seleccionar fácilmente la grabación de vídeo sin salir de la aplicación, así como los ajustes que estaban ocultos en la parte izquierda de la pantalla en una barra de menú deslizante lateral. Según el sitio de desarrolladores de Android, la nueva aplicación de la Cámara era un 39% más rápida, y el tiempo entre disparo y disparo fue mejorado en un 28%. Lo único lamentable de la actualización de Android 1.6 fue que no muchos dispositivos la recibieron, y la mayoría como el Droide Eris o Hero saltaron directamente de Android 1.5 y Android 2.1", "imagenes/donut.jpg");
			break;
		case 21:
			//Éclair
			alojar("2.0 - Éclair", "v2.0 Lanzada el 26 de octubre del 2009, la actualización de Android 2.0 Eclair debuto en noviembre de ese mismo año en los Motorola Droid y se trato de un hito muy importante para la plataforma que dio paso al crecimiento exponencial y la atención de las masas. Android Eclair nos sorprendió con su integración social permitiendo sincronizar los contactos de Facebook, y más tarde, Twitter, que le permitió a sus usuarios tener todos sus contactos de todas las redes sociales en un solo lugar. Por otro lado, el teclado virtual de Android fue mejorado también con el soporte multitouch, y el diccionario de sugerencias ampliado, que incluía los nombres de nuestros contactos. El navegador de Android también recibió una actualización, que refinó el aspecto general, sorprendiendo con la nueva función doble toque para el zoom, lo que permitía ampliar la foto sin la necesidad de que los usuarios tengan que depender exclusivamente de los botones más y menos en la parte inferior de la pantalla. La vista de favoritos se modificó también para apoyar las miniaturas, y el navegador comenzó a dar soporte para HTML5.", "imagenes/ecleir.jpg");
			break;
		case 22:
			//Frozen Yogurt
			alojar("2.1 - Frozen Yogurt", "Android 2.1 representa la segunda etapa en la evolución de Eclair con su introducción en el Nexus One. Esta trajo consigo los fondos de pantalla animados e interactivos, siendo ahora hasta 5 escritorios de serie en lugar de los cuales 3 que mostraban las versiones anteriores, que también estrenaban un nuevo modo de navegación en el que con una pulsación larga aparecían las miniaturas de todos ellos. El Nexus One fue también el primer teléfono que extendiera las capacidades de voz existente encontrados en versiones anteriores de Android, dando al usuario la opción de traducir la voz en texto en cualquier campo de texto, así Android comenzaba a dar soporte a la búsqueda a través del reconocimiento de voz. Con esto se incorporo un botón del micrófono en el teclado, que permite hablar en lugar de escribir mensajes de correo electrónico, textos, buscar, y casi cualquier otra cosa que requiriera la escritura. Android 2.1 también introdujo algunos efectos 3D en el sistema operativo entre los que podemos encontrar el icono para lanzar las aplicaciones, en lugar de la pestaña, que ahora volaban desde las esquinas para colocarse en la pantalla o para la galería de fotos, que ahora mostraba un nuevo aspecto. Ademas ahora basta con un golpecito en el lanzador de aplicación para revelar sus aplicaciones mientras que antes era necesario arrastra hacia arriba la pestaña. La galería de fotos también vio una importante remodelación en 3D con la ayuda de CoolIris que logro una de las más bonitas aplicaciones integradas para el sistema operativo hasta la fecha. Froyo (v2.2), (Abreviatura de «frozen yogurt») Yogur helado. Lanzada el 20 de mayo de 2010, Android 2.2 Froyo fue una de las actualizaciones que consagro al sistema operativo como la competencia de iOS 4 de Apple, dotando a los terminales Android con un notable incremento de la velocidad de todo el sistema, tanto en sus aplicaciones como en la navegación de Internet.", "imagenes/frozen.jpg");
			break;
		case 23:
			//GingerBread
			alojar("2.3 - Gingerbread", "El 6 de diciembre de 2010 Google presentó de forma oficial Android 2.3 Gingerbread, una actualización que se materializaría con el lanzamiento del Nexus S. Gingerbread incorporó una gran cantidad de novedades tanto a estético con una renovada interfaz de usuario con incrementos de velocidad y simpleza, y se preparó para la llegada de los smartphones de doble núcleo al cambiar al sistema de archivos EXT4 y de pantallas más grandes con el soporte para resoluciones WXGA y mayores.Del lado del usuario, una de las características más notables fue el nuevo teclado virtual que simplificó la entrada de texto y permitió una edición más rápida gracias a la nueva disposición de las teclas y la función para corregir palabras ya ingresadas con sugerencias del diccionario o la opción de cambiarlas mediante voz. Sin dudas la adquisición de BlindType tuvo que ver en este sentido y le permitió a Google implementar con características como permitir el deslizamiento al teclear, asistencia en la escritura, ajustes personalizados al estilo de escritura del usuario y el “multitouch key-chording”, que permite al usuario ingresar rápidamente números y símbolos presionando Shift+ y ?123+, sin necesidad de cambiar los métodos de entrada manualmente.", "imagenes/ginger.jpg");
			break;
		case 31:
			//HoneyComb
			alojar("3.0 - Honeycomb", "El 22 de febrero de 2011 Google comenzó a desdoblar el sistema operativo con la actualización de Android 3.0 Honeycomb y su correspondiente SDK, algo que tendría poca vida debido al alto costo que supone mantener dos plataformas separadas. Basado en el kernel 2.6.36.50 de linux, Honeycomb llego por primera vez en las tablets Motorola Xoom el 24 y sus principales características fueron una renovada interfaz de usuario con una nueva barra de sistema en la parte inferior de la pantalla que permitía el acceso rápido a notificaciones, estados y botones de navegación suavizados y el Action Bar que permitía el acceso a opciones contextuales, navegación, widgets y otros tipos de contenido desde la parte superior. Ademas se agrego una nueva interfaz de contactos divida en dos paneles, algo que también calo en la interfaz de correo para simplificar la visualización y organización de mensajes, permitiendo a su vez seleccionar uno o más mensajes. Android 3.0 Honeycomb. Por otro lado la actualización de Honeycomb trajo un teclado re-diseñado para pantallas de gran tamaño y se simplificó la función multitarea con una opción que permitió acceder a las aplicaciones recientes que se mostraban en una lista con imágenes para reconocerlas fácilmente. El navegador también tuvo cambios con la llegada de las pestañas que reemplazaron a las ventanas, la característica de auto completado al ingresar texto y un nuevo modo incógnito que permitió la navegación de forma anónima como el navegador web. Por ultimo cabe mencionar el soporte para microprocesadores multi-núcleo, la aceleración de hardware, la posibilidad de encriptar todos los datos del usuario, y mejoras en el uso de HTTPS gracias a la incorporación de SNI.", "imagenes/honey.jpg");
			break;
		case 41:
			//IceCreamSandwich
			alojar("4.0 - Ice Cream Ice Cream Sandwich", "La llegada de Android 4.0 Ice Cream Sandwich el 19 de octubre de 2011 significó un importante paso en la evolución de Android que no solo vio renovada casi por completo su interfaz de usuario con el nuevo diseño Holo, sino que volvió a integrar el sistema operativo en sus versiones para Tablets y Smartphones. La nuevo interfaz de usuario se mostró como la evolución y perfeccionamiento de las ideas de Android 3.0 dándole un poco de esa mirada limpia y futurista. Ademas Google construyó su propia fuente denominada Roboto y en lugar de botones de hardware, el sistema operativo ofreció sus propios botones virtuales de Atrás, Inicio, y los botones de aplicaciones recientes en la pantalla también para los smartphones.Se simplifico la posibilidad de crear carpetas, con estilo de arrastrar y soltar. Android 4.0 Ice Cream Sandwich Home. Android 4.0 Ice Cream Sandwich Apps. Android 4.0 Ice Cream Sandwich Teclado. Pero no todo en Android 4.0 tuvo que ver con el diseño, Google incluyo algunas mejoras que hoy usamos a diario como la posibilidad de acceder a las aplicaciones directamente desde la pantalla de bloqueo y Google Chrome como navegador por defecto que permitió abrir hasta a 15 pestañas y realizar la sincronización automática con los marcadores de la versión de escritorio. Android 4.0 Ice Cream Sandwich Lanzar Apps. Android 4.0 Ice Cream Sandwich Navegador. Android 4.0 Ice Cream Sandwich Datos. Otras aplicaciones nativas mejoradas fueron la cámara que ya no mostró retardo en el obturador y permitió realizar ajustes sobre el time-lapse, seleccionar el modo panorámico y hacer zoom durante la grabación de video que ahora ascendía a los 1080p para dispositivos con Android de serie.", "imagenes/banana.jpg");
			break;
		case 42:
			//JellyBean
			alojar("4.2 - JellyBean", "La actualización a Android 4.2 JellyBean trae mejoras importantes para la optimización del rendimiento a través del Proyecto Svelte, una tecnología muy parecida al que antaño fue bautizado como Proyecto Butter o Mantequilla. Suavizaba de manera patente el funcionamiento de todas las aplicaciones del equipo, así como las transiciones. Ahora ocurre lo mismo y de hecho, incluso los terminales más básicos (aquellos que apenas cuentan con 512 MB de RAM) podrán funcionar con la edición KitKat. Los iconos de la interfaz de usuario, situados en la pantalla de inicio y en los menús del interior, se han ampliado para que sea más fácil ubicarlos y organizarlos. Pero esto no es todo. La nueva versión de este sistema operativo ha integrado los mensajes (SMS, MMS y Gtalk) en una misma conversación, de modo que para los usuarios resultará más fácil organizar toda la información compartida con un contacto en concreto, aunque lo haya hecho a través de distintas herramientas de comunicación. Se ha instalado una nueva aplicación para gestionar el correo electrónico, así como un sistema para agilizar la búsqueda de contactos. Todas estas mejoras llegarán al HTC One Google Edition, pero también a la versión internacional de este dispositivo. Seguiremos atentos para ofrecerte todos los detalles sobre esta esperada actualización.", "imagenes/jelly.jpg");
			break;
		case 43:
			//KitKat
			alojar("4.4 - KitKat", "La actualización a Android 4.4 KitKat trae mejoras importantes para la optimización del rendimiento a través del Proyecto Svelte, una tecnología muy parecida al que antaño fue bautizado como Proyecto Butter o Mantequilla. Suavizaba de manera patente el funcionamiento de todas las aplicaciones del equipo, así como las transiciones. Ahora ocurre lo mismo y de hecho, incluso los terminales más básicos (aquellos que apenas cuentan con 512 MB de RAM) podrán funcionar con la edición KitKat. Los iconos de la interfaz de usuario, situados en la pantalla de inicio y en los menús del interior, se han ampliado para que sea más fácil ubicarlos y organizarlos. Pero esto no es todo. La nueva versión de este sistema operativo ha integrado los mensajes (SMS, MMS y Gtalk) en una misma conversación, de modo que para los usuarios resultará más fácil organizar toda la información compartida con un contacto en concreto, aunque lo haya hecho a través de distintas herramientas de comunicación. Se ha instalado una nueva aplicación para gestionar el correo electrónico, así como un sistema para agilizar la búsqueda de contactos. Todas estas mejoras llegarán al HTC One Google Edition, pero también a la versión internacional de este dispositivo. Seguiremos atentos para ofrecerte todos los detalles sobre esta esperada actualización.", "imagenes/banana.jpg");
			break;
	}
}

function alojar(title, expo, img){
	$("#leftmen").empty();
	$("#leftmen").append($("<h1>", {id: "appTit", text: title}));
	$("#leftmen").append($("<img>", {id: "appImg", src: img}));
	$("#leftmen").append($("<div>", {id: "appCon", text: expo}));
}