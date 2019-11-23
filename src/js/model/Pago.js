function pasarPantalla(){

    var elemento = document.querySelector('input[name="campo"]');
    var valor = elemento.value;
   
    if (valor==="" ||valor===null){
    window.location.href = "../../pago.html";
    alert("Rellena los campos requeridos");
    }
else
    window.location.href = "../../pagoExitoso.html";
}