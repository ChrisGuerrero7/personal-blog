// Cuando damos click al icon-menu nos ejecute el evento click 
// y nos llame a la funcion mostrar_menu
document.getElementById("icon-menu").addEventListener("click", mostrar_menu); 

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}