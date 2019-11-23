function descargar(){
    let imprimir = document.getElementById("area").innerHTML;
     let original = document.body.innerHTML;

     document.body.innerHTML = imprimir;

     window.print();

     document.body.innerHTML = original;
}