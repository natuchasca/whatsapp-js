//NIVEL 0
//1 Input de texto
//variable para agregar texto en el input clase escribir-mensaje

$('.escribir').bind('keypress', function(e) {
	if(e.keyCode==13){
		var txt= $(this).val();
		$(".mensaje-respuesta1").html(txt);
		agregar();
	}
});
function agregar(){
	var txt1= document.createElement("p");
	$(".mensaje-respuesta1").
}

//2 Burbujas




//3Lista de Contactos




//4Limpiar lista del chat





//NIVEL 1 Memoria
//5 cargar mensajes anteriores


//6 Sistema de busqueda para filar Contactos



