//NIVEL 0
//1 Input de texto



//2 Burbujas




//3Lista de Contactos




//4Limpiar lista del chat





//NIVEL 1 Memoria
//5 cargar mensajes anteriores


//6 Sistema de busqueda para filar Contactos
//Recoger valor texto del input 
//Comparar este valor con el nombre de contactos 
//Mostrar los que coincidan al hacer enter

 /*   var contactos = new Array();
    contactos = $(".nombre-contacto").text();
    var input = $(".buscar-input").val();

    $(".buscar-input").on("change key paste", function(){
        $(".cuadro-contacto").find(input);

        if(input == contactos) {
            $(".cuadro-contacto").fadeIn('slow').removeClass('hidden');
        }
        else {
            $(".cuadro-contacto").fadeOut('normal').addClass('hidden');
        }


    });

  */ 


/*

var contactos = [];
$(".nombre-contacto").push(contactos);
 
var input = $(".buscar input:text");
    var nombre = $(".nombre-contacto").text();


   
    else {
        $('.cuadro-contacto').each(function() {
            if($(this).val == input) {
                $(this).fadeIn('slow').removeClass('hidden');
            }
            else {
                $(this).fadeOut('normal').addClass('hidden');
            }
        });
    }
*/

//https://github.com/Ranks/emojify.js
//http://hassankhan.me/emojify.js/
/*$(".insert-emoticon").on(click, function (){
	emojify.run()
});

emojify.run();
// OR
emojify.run(document.getElementById('my-element'))
// OR
emojify.run(null, function(emoji, emojiName){
  var span = document.createElement('span');
  span.className = 'emoji emoji-'  + emojiName;
  span.innerHTML = emoji + ' replaced';
  return span;
});*/