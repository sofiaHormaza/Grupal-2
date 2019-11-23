function pasarPantalla(){

    var elemento = document.querySelector('input[name="campo"]');
    var valor = elemento.value;
   
    if (valor==="" ||valor===null){
    window.location.href;
    alert("Rellena los campos requeridos");
    }
else
    location.href = "../../pagoExitoso.html";
}