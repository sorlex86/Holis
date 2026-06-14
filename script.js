let intentos = 3
let confettiLanzado = false

/* ---------------- PREGUNTA ---------------- */

function verificarRespuesta(){

let r = document.getElementById("respuesta").value

if(r == 2022){

location.href = "login.html"

}else{

document.getElementById("error").innerText = "Respuesta incorrecta"

}

}

/* ---------------- LOGIN ---------------- */

function checkPassword(){

const correctPassword = "Tomodachi"

let input = document.getElementById("password").value

if(input === correctPassword){

location.href = "app.html"

}else{

intentos--

document.getElementById("error").innerText =
"Incorrecto. Intentos restantes: " + intentos

if(intentos <= 0){

location.href = "index.html"

}

}

}

/* ---------------- CARTAS ---------------- */

const cartas = {

triste:
"Esta bien que te sientas triste y que no te sientas bien, pero espero que alguna de mis estupidices te ayuden a alegrarte el día.",

enojada:
"Si estas enojada, porfavor que no sea conmigo jajaja, pero si es conmigo espero que me digas pa hablarlo y solucionarlo.",

estresada:
"Tu puedes, si te puedo ayudar en algo, por favor avisame, aunque sea solo para distraerte un ratito.",

feliz:
"Ojalá lo disfrutes y me cuentes el chisme jajajaja.",

aburrida:
"Siempre que pueda te voy a reventar tu telefono con muchos reels, y si si se puede vamos a jugar billar."

}

function abrirCarta(tipo){

let texto = cartas[tipo]

document.getElementById("textoCarta").innerText = texto

document.getElementById("sobre").classList.remove("abierto")

}

function abrirSobre(){

let sobre = document.getElementById("sobre")

sobre.classList.toggle("abierto")

}

/* ---------------- VALES ---------------- */

let valeActual = "";
let elementoActual = null;

function usarVale(elemento, vale){

    if(elemento.classList.contains("usado")){
        alert("Este vale ya fue utilizado");
        return;
    }

    valeActual = vale;
    elementoActual = elemento;

    document.getElementById("fechaVale").value = "";
    document.getElementById("horaVale").value = "";

    document.getElementById("modalVale").style.display = "flex";
}

function cerrarModal(){
    document.getElementById("modalVale").style.display = "none";
}

function confirmarVale(){

    const fecha = document.getElementById("fechaVale").value;
    const hora = document.getElementById("horaVale").value;

    if(!fecha || !hora){
        alert("Selecciona una fecha y una hora");
        return;
    }

    elementoActual.classList.add("usado");
    elementoActual.innerHTML = "✔ Vale usado<br>" + valeActual;

    let numero = "525610910911";

    let mensaje =
`Quiero usar el vale: ${valeActual}

📅 Fecha: ${fecha}
🕒 Hora: ${hora}`;

    let url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    cerrarModal();
}

/* ---------------- REGALO ---------------- */

function abrirRegalo(){

let box = document.querySelector(".gift-box")

let mensaje = document.getElementById("mensajeRegalo")

box.classList.toggle("open")

mensaje.classList.toggle("hidden")

if(confettiLanzado) return

confettiLanzado = true

for(let i=0;i<40;i++){

let conf = document.createElement("div")

conf.className = "confetti"

conf.style.left = Math.random()*100 + "vw"

conf.style.background =
"hsl(" + Math.random()*360 + ",100%,50%)"

conf.style.animationDuration =
(Math.random()*3+2) + "s"

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),5000)

}

}
