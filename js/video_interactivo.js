var modoOculto = false;
var modoTesteo = false;

var myVideoCR = document.getElementById("miVideoCR");


//var penalizacion = document.getElementById("penalizacion");
var cuentaReinicios = document.getElementById("cuentaReinicios");
var cuentaPausa = document.getElementById("cuentaPausa");
var pausasPuntos = document.getElementById("pausas");
var estadoModoO = document.getElementById("estadoModoO");
var estadoModoT = document.getElementById("estadoModoT");
var fondo = document.getElementById("fondo");
var tiempo = document.getElementById("tiempo");
var tiempoPrueba = document.getElementById("tiempoPrueba");
// var nota = document.getElementById("nota");
// var julioCesar = document.getElementById("julioCesar");

// var aprobacion = 1;
var contR = 1;
var contP = 1;
var contAciertos = 0;
var contFallos = 0;
var empezado = false;
var acabado = false;
var ms = -15;
var faseVideo = 0;
var nota = 0;
var penalizando = false;
var penalizacion=0;

var videoCR = videojs('miVideoCR', {
	fluid : true,
	loop : false,
	controls : false, 
	controlBar : {
		volumePanel : {
			inline : false
		},
		fullscreenToggle : false,
		playToggle : false,
	}
});
videoCR.removeChild('BigPlayButton');

function comprobacionPlay() {
	if (empezado == false && !videoCR.paused) {
		empezado = true;
		// segundos = segundos - 1;
		cronometro();
	}
}

function play() {
	if (empezado == false) {
		empezado = true;
		cronometro();
	}
	if (videoCR.paused) {
		videoCR.play();
	}
	if (acabado == true) {
		reset();
	}
}

function pause() {
	if (!videoCR.paused) {
		videoCR.pause();
		cuentaPausa.innerHTML = contP++;
		pausasPuntos.innerHTML = cuentaPausa.innerHTML;
	}
}

function atras() {
	window.location.href = "index.html";
}

function reset() {
	location.reload();
	empezado = false;
	acabado = false;
}

function ocultar() {
	if (modoOculto == false) {
		modoOculto = true;
		estadoModoO.innerHTML = 'ON';
		estadisticasOcultable.style.display = 'none';
		fondo.style = "background-color : black";
	} else {
		modoOculto = false;
		estadoModoO.innerHTML = "OFF";
		estadisticasOcultable.style.display = 'block';
		fondo.style = "background-color : white";
	}
}

//function testeo() {
//	if (modoTesteo == false) {
//		modoTesteo = true;
//		videoCR.load();
//		modoTesteo = true;
//		estadoModoT.innerHTML = 'ON';
//	} else {
//		modoTesteo = false;
//		videoCR.load();
//		estadoModoT.innerHTML = "OFF";
//	}
//}

//function mantenimiento(){
//	$('#myMantenimiento').modal({
//		backdrop : 'static',
//		keyboard : false
//	});
//}


setInterval(cronometro, 1000);
function cronometro() {
	if (empezado == true) {
		ms = ms + 1;
		tiempoPrueba.innerHTML = ms.toFixed(0);
	}
}

setInterval(calculoNota, 100);
function calculoNota() {
	document.getElementById("nota").innerHTML = nota.toFixed(2);
	document.getElementById("penalizacion").innerHTML = penalizacion.toFixed(2);
}

setInterval(penalizacionTiempo, 500);
function penalizacionTiempo() {
	if ((ms - videoCR.currentTime() > "0") && empezado == true) {
		nota = nota - 0.01;
		penalizacion = penalizacion - 0.01;
		tiempoPrueba.style = "color: red";
		if (nota < 5) {
			document.getElementById("julioCesar").src = "img/mal.png";
		} else {
			document.getElementById("julioCesar").src = "img/bien.png";
		}
	} else if (nota >= 5) {
		document.getElementById("julioCesar").src = "img/bien.png";
	}
}

setInterval(paradasModal1, 10);
function paradasModal1() {
	
	let myModal = new bootstrap.Modal(document.getElementById('myModal1'), {});
	tiempo.innerHTML = videoCR.currentTime();
	if (videoCR.currentTime() > '15' && faseVideo == 0) {
		// Para deshabilitar el teclado (si deseas impedir cerrar el modal con Escape, por ejemplo)
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });

        // Cambiar la fase
        faseVideo = 1;
        
        // Pausar el video
        videoCR.pause();
	}
}

setInterval(paradasModal2, 10);
function paradasModal2() {
	let myModal = new bootstrap.Modal(document.getElementById('myModal2'), {});
	if (videoCR.currentTime() > '27' && faseVideo == 1) {
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });
		faseVideo = 2;
		videoCR.pause();
	}
}

setInterval(paradasModal3, 10);
function paradasModal3() {
	let myModal = new bootstrap.Modal(document.getElementById('myModal3'), {});
	if (videoCR.currentTime() > '42' && faseVideo == 2) {
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });
		faseVideo = 3;
		videoCR.pause();
	}
}

setInterval(paradasModal4, 10);
function paradasModal4() {
	let myModal = new bootstrap.Modal(document.getElementById('myModal4'), {});
	if (videoCR.currentTime() > '53' && faseVideo == 3) {
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });
		faseVideo = 4;
		videoCR.pause();
	}
}

setInterval(paradasModal5, 10);
function paradasModal5() {
	let myModal = new bootstrap.Modal(document.getElementById('myModal5'), {});
	if (videoCR.currentTime() > '65' && faseVideo == 4) {
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });
		faseVideo = 5;
		videoCR.pause();
	}
}

setInterval(paradasModal6, 10);
function paradasModal6() {
	let myModal = new bootstrap.Modal(document.getElementById('myModal6'), {});
	if (videoCR.currentTime() > '77' && faseVideo == 5) {
		myModal.show();
        window.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                event.preventDefault(); // Evita que se cierre con Escape
            }
        });
		faseVideo = 6;
		videoCR.pause();
	}
}

// Notas --> Pregunta 1 y 6 (2ptos). Preguntas 2,3,4 y 5 (1.5ptos)
// Penalizacion fallos --> -1pto siempre
// Penalizacion el tiempo cuando alcanza el currentTime del video
// Dedo abajo y rojo si nota es <5 y el tiempo ya esta penalizando

// -----MODAL1----------------------------------------------------------------

function enviar1() {
	var respuesta1 = document.getElementById("respuesta1").value;

	if (respuesta1.toUpperCase() == "ALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "NUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITANUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITADENUESTRASEÑORADEALARCOS"
			|| respuesta1.toUpperCase().replaceAll(' ', '') == "ERMITAALARCOS") {

		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("respuesta1").value = "";
		videoCR.play();
		nota = nota + 2;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("respuesta1").value = "";
		videoCR.play();
		nota = nota - 0.7;
		penalizacion = penalizacion - 0.07;
	}
}

function repetir1() {
	videoCR.currentTime(0);
	videoCR.play();
	faseVideo = faseVideo - 1;
}
// ------MODAL2---------------------------------------------------------------

function enviar2() {
	var respuestaC = document.getElementById("correcta").checked;
	if (respuestaC == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta").checked = false;
		videoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("1inc1").checked = false;
		document.getElementById("1inc2").checked = false;
		videoCR.play();
		nota = nota - 1;
		penalizacion = penalizacion - 1;
	}
}

function repetir2() {
	videoCR.currentTime(15);
	videoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL3---------------------------------------------------------------

function enviar3() {
	var respuestaC1 = document.getElementById("correcta1").checked;
	if (respuestaC1 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta1").checked = false;
		videoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("2inc1").checked = false;
		document.getElementById("2inc2").checked = false;
		videoCR.play();
		nota = nota - 1;
		penalizacion = penalizacion - 1;
	}
}

function repetir3() {
	videoCR.currentTime(27);
	videoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL4---------------------------------------------------------------

function enviar4() {
	var respuestaC2 = document.getElementById("correcta2").checked;
	if (respuestaC2 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta2").checked = false;
		videoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("3inc1").checked = false;
		document.getElementById("3inc2").checked = false;
		videoCR.play();
		nota = nota - 1;
		penalizacion = penalizacion - 1;
	}
}

function repetir4() {
	videoCR.currentTime(42);
	videoCR.play();
	faseVideo = faseVideo - 1;
}

// ------MODAL5---------------------------------------------------------------

function enviar5() {
	var respuestaC3 = document.getElementById("correcta3").checked;
	if (respuestaC3 == true) {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("correcta3").checked = false;
		videoCR.play();
		nota = nota + 1.5;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("4inc1").checked = false;
		document.getElementById("4inc2").checked = false;
		videoCR.play();
		nota = nota - 1;
		penalizacion = penalizacion - 1;
	}
}

function repetir5() {
	videoCR.currentTime(53);
	videoCR.play();
	faseVideo = faseVideo - 1;
}

// -----MODAL6----------------------------------------------------------------

function enviar6() {
	var respuesta2 = document.getElementById("respuesta2").value;
	if (respuesta2.toUpperCase() == "GASSET"
			|| respuesta2.toUpperCase().replaceAll(' ', '') == "PARQUEDEGASSET"
			|| respuesta2.toUpperCase().replaceAll(' ', '') == "DEGASSET") {
		contAciertos++;
		aciertos.innerHTML = contAciertos;
		document.getElementById("respuesta2").value = "";
		videoCR.play();
		nota = nota + 2;
		empezado = false;
		acabado = true;
	} else {
		contFallos++;
		fallos.innerHTML = contFallos;
		document.getElementById("respuesta2").value = "";
		videoCR.play();
		nota = nota - 0.7;
		penalizacion = penalizacion - 0.7;
		empezado = false;
		acabado = true;
	}
}

function repetir6() {
	videoCR.currentTime(65);
	videoCR.play();
	faseVideo = faseVideo - 1;
}

// $(window).on('load', function() {
// $('#myModal').modal('show');
// });




