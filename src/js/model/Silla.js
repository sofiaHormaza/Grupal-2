let sillasReservadas;


function reservaSillas() {
sillasReservadas= document.querySelectorAll("input[name=silla]:checked").length;
              alert("Has reservado"+" "+sillasReservadas+" "+"sillas");
           }

function getReservas(){
    return this.sillasReservadas;
}





    
