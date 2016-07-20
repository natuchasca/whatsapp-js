//NIVEL 0
//1 Input de texto



//2 Burbujas




$(document).ready(function(){

	//Scroll bar abajo
	$( ".mensajes").scrollTop( 300 );

	//3Lista de Contactos
	$('.cuadro-contacto').on('click',function(){
		var thisClone = $(this).clone();
		//$('.contacto-mensaje img').add('.contacto-mensaje').add('.contacto-mensaje div');
		$('.contacto-mensaje').html(thisClone); // Clonar 
		$('.contacto-mensaje').find('.estado').remove(); // Remover ultimo mensaje .estado
		$('.nombre-contacto').addClass('nombre-contacto-mensaje'); // Agregar estilo
		$('.hora-fecha').addClass('contactos-hablando'); // Agregar estilo
		$('.contacto-mensaje .contactos-hablando').after('<div class="icons"><div class="element"><i class="icon-attachment"></i><input type="file" name="" id=""></div><i class="icon-dots-three-vertical icon-mensaje-up"></i></div>');

		//$('.mensaje').remove(); $('.respuesta').remove();

	
/*
		$('.primero').click(function(){
			$('.mensaje').show(); $('.respuesta').show();
		})
		$('.segundo').click(function(){
			console.log("soy el segundo")
		})
		$('.tercero').click(function(){
			console.log("soy el tercero")
		})
		$('.cuarto').click(function(){
			console.log("soy el cuarto")
		})
		$('.quinto').click(function(){
			console.log("soy el quinto")
		})
		$('.sexto').click(function(){
			console.log("soy el sexto")
		})
		$('.septimo').click(function(){
			console.log("soy el septimo")
		})
		$('.octavo').click(function(){
			console.log("soy el octavo")
		})
		$('.noveno').click(function(){
			console.log("soy el noveno")
		})*/
	});
	

	
	//Funcion para limpiar inputs
    $("input").on("focus", function(){
        $("input").val("");
    });

    //Adjuntar archivo al clickear icono
  	$(".icon-attachment").click(function () {
	  $("input[type='file']").trigger('click');
	});

  /*	$('input[type="file"]').on('change', function() {
	  var val = $(this).val();
	  $(this).siblings('span').text(val);
	})
*/



})



//4Limpiar lista del chat





//NIVEL 1 Memoria
//5 cargar mensajes anteriores
//https://platzi.com/blog/local-storage-html5/




//6 Sistema de busqueda para filar Contactos   OK!
//Recoger valor texto del input para comparar con nombre de contactos y mostrar los que coincidan
//Función aplicada a input id = buscar-input con evento onkeyup
function search(){
	var box = document.getElementsByClassName("cuadro-contacto");
	var input = document.getElementById("buscar-input").value.toLowerCase();
	var text = "";
	var found=false;
	var compareWith="";

	// Recorremos los box 
	for (var i = 0; i < box.length; i++) {
		text = box[i].getElementsByClassName("nombre-contacto");
		found = false;
		// Recorremos los textos
		for (var j = 0; j < text.length && !found; j++) {
			compareWith = text[j].innerHTML.toLowerCase().replace(/í/gi,"i");
			// Buscamos el texto en el contenido
			if (input.length == 0 || (compareWith.indexOf(input) > -1)) {
				found = true;
			}
		}
		if(found) {
			box[i].style.display = '';
		} else {
			// si no ha encontrado ninguna coincidencia, no muestra nada
			box[i].style.display = 'none';
		}
	}
}






