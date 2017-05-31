//declaracion de variables
var tar = document.getElementById("numero_tarjeta");
var pin = document.getElementById("pin");
var btn_cl = document.getElementById("btn_cl");

var users = [];
function user(tarjeta, pin){
    this.tarjeta = tarjeta;
    this.pin = pin;
}
 //Usuario
function ingresarUsuario(){
    var num_tar = tar.value;
    var pn = pin.value;
    if(num_tar && pn){
     if(pn.length === 4 && num_tar.length === 16){
            var r = new user(num_tar, pn);
            console.log(r);
            guardar(r);
            num_tar.enabled = false;
            pn.enabled = false;
            setTimeout(redCuenta,2000);
        }
        else{
            alert("Excedio los limites de 16 para el numero de tarjeta y 4 para el numero de pin");
        }
    }
    else{
        alert("Hay campos vacios por favor llenelos");
    }
}
function redCuenta(){
    window.open("cuenta.html","_self");
}
//cargarDatos
function cargarDatos(){
    var datos = localStorage.getItem("user");
    if(datos !== null){
        users = JSON.parse(datos);
    }
}
function guardar(data){
    var datos = JSON.stringify(data);
    localStorage.setItem("user",datos);
}



window.addEventListener("load", cargarDatos);


btn_cl.addEventListener("click",ingresarUsuario);