//NIVEL 0
//1 Input de texto

var txt= $('.escribir').val();

//Scroll bar abajo
$( ".mensajes").scrollTop(300);

$('.escribir').bind('keypress', function(e) {
	if(e.keyCode==13){
		var txt= $(this).val();

		//2 Burbujas
		div = $("<div></div>").text(txt).css({
            "background-color": "#dcf8c6",
            "border-radius": "10px",
            "text-align": "left",
            "padding": "5px 15px 2px",
            "float": "right",
            "clear": "right",
            "margin": "5px",
        });;
		$(".mensajes").append(div);

		// Fecha del mensaje enviado
		var fecha = new Date();
		var hora = fecha.getHours();
		var minutos = fecha.getMinutes();
		//Agregar cero delante a numeros con 1 solo digito
		if (hora<10) hora = "0"+hora;
		if (minutos<10) minutos = "0"+minutos;

		var enviado = $("<p></p>").text(hora + ":" + minutos).css({
            "text-align": "right",
            "font-size": "10px",
            "color": "grey",
            "margin-left": "60px",
        });
		div.append(enviado);

		//Limpiar input al enviar mensaje
		$(".escribir-mensaje input").val('');
		
	}
});	






$(document).ready(function(){

	//3Lista de Contactos
	$('.cuadro-contacto').on('click',function(){
		var thisClone = $(this).clone();
		//$('.contacto-mensaje img').add('.contacto-mensaje').add('.contacto-mensaje div');
		$('.contacto-mensaje').html(thisClone); // Clonar 
		$('.contacto-mensaje').find('.estado').remove(); // Remover ultimo mensaje .estado
		$('.nombre-contacto').addClass('nombre-contacto-mensaje'); // Agregar estilo
		$('.hora-fecha').addClass('contactos-hablando'); // Agregar estilo
		$('.contacto-mensaje .contactos-hablando').after('<div class="icons"><div class="element"><i class="icon-attachment"></i><input type="file" name="" id=""></div><i class="icon-dots-three-vertical icon-mensaje-up"></i></div>');


		mensaje = $("<div></div>");
		mensaje.addClass("mensajes");
        $(".mensajes").add(mensaje);
		$('.mensaje').hide(); $('.respuesta').hide();

	

		$('.primero').click(function(){
			$('.mensaje').show(); $('.respuesta').show();
		})
	/*	$('.segundo').click(function(){
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



