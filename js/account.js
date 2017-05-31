//declaracion de variables
var mn = document.getElementById("money");
var qt = document.getElementById("qt");
var btn_ins = document.getElementById("btn_ins");
var btn_rm = document.getElementById("btn_rm");
var saldo = 0;
var sle;
var user;

function sl(saldo, user){
    this.saldo = saldo;
    this.user = user;
}
function inicializacion(){
    var datos = localStorage.getItem("user");
    var datoSaldos = localStorage.getItem("saldo");
    if(datos !== null){
         user = JSON.parse(datos);
         console.log(user);
         saldo = 20000;
         mn.innerHTML = saldo;
          if(datoSaldos !== null){
            sle = JSON.parse(datoSaldos);
            console.log(sle.saldo);
            saldo = parseInt(sle.saldo);
            mn.innerHTML = saldo;
        }   
          
      } 
}

function insertarSaldo(){
    var q = qt.value;
    var slAugment = saldo;
    if(q){
        slAugment += parseInt(q);
        mn.innerHTML = slAugment;
        var r = new sl(slAugment, user.tarjeta);
        guardar(r);
        location.reload();
        
    }

}


function retirarSaldo(){
    var q = qt.value;
    var slRt = saldo;
    if(q){
       if(parseInt(q) < slRt){
           console.log(saldo);
            slRt -= parseInt(q);
             mn.innerHTML = slRt;
            var r = new sl(slRt, user.tarjeta);
            guardar(r);
            location.reload();
       }
       else{
           alert("La cantidad que quiere retirar es mayor a la que se tiene");
       }
        
    }
    else{
        alert("No ha puesto nada para retirar");
    }

}

function guardar(sl){
    var datos = JSON.stringify(sl);
    localStorage.setItem("saldo",datos);
}

window.addEventListener("load",inicializacion);
btn_ins.addEventListener("click",insertarSaldo);
btn_rm.addEventListener("click", retirarSaldo);