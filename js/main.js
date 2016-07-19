//NIVEL 0
//1 Input de texto



//2 Burbujas




//3Lista de Contactos
$(document).ready(function(){

	$('.cuadro-contacto').on('click',function(){
		var thisClone = $(this).clone();
		$('.contacto-mensaje img').add('.contacto-mensaje p').add('.contacto-mensaje div').hide();
		$('.contacto-mensaje').html(thisClone);
		$('.contacto-mensaje').find('.estado').remove();
		$('.nombre-contacto').removeClass().addClass('nombre-contacto-mensaje');
		$('.hora-fecha').removeClass().addClass('contactos-hablando');
		$('.contacto-mensaje .contactos-hablando').after('<div class="icons"><i class="icon-attachment icon-mensaje-up"></i><i class="icon-dots-three-vertical icon-mensaje-up"></i></div>');
		$('.mensajes').hide();

		$('.primero').click(function(){
			$('.mensajes').show()
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
		})
	})

})



//4Limpiar lista del chat





//NIVEL 1 Memoria
//5 cargar mensajes anteriores


//6 Sistema de busqueda para filar Contactos
//Activo Categorias para seleccionar peliculas
	


