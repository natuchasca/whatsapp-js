//NIVEL 0
//1 Input de texto
//variable para agregar texto en el input clase escribir-mensaje
var txt= $('.escribir').val();
$('.escribir').bind('keypress', function(e) {
	if(e.keyCode==13){
		var txt= $(this).val();
		var txt1 = $('<div class="mensaje"><span class="verde" class="fecha">Maria Paula Rivarola</span><p>' + txt + '</p></div>');
		$(".mensaje1").html(txt1);
		$(".mensaje1").css("background-color","#B0D87A")
		//$(".mensaje1").empty();
	}
});


//2 Burbujas




//3Lista de Contactos




//4Limpiar lista del chat





//NIVEL 1 Memoria
//5 cargar mensajes anteriores


//6 Sistema de busqueda para filar Contactos



