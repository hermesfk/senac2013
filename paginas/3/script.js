$("input").keyup(function() { //Funcion al Escribir en el Input ejecutamos el Siguiente Codigo
  var get = "." + $("input").val().toLowerCase(); //Creamos la Variable que obtendra lo que Escribimos en el Input mas el Punto agregado(Clase)
  $("div").show().not(get).hide(); //Mostramos los Resultados de la Busqueda y Ocultamos los que no Coincidan
});