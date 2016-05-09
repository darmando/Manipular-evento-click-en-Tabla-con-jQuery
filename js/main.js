"use strict";
$(document).ready(function(evt){
  llenarListaAlumnos();
});

function llenarListaAlumnos(){
    $.getJSON('js/listaAlumnosJSON.json', function(response) {
      let list = response.alumnos;
      if (list.length < 1) {
         alert("SIN NINGÚN RESULTADO");
      } else {
          $('#tbAlumnoss tr').remove();
          for(let i = 0; i < list.length; i++) {
              $('#tbAlumnoss').append('<tr data-idalumno="'+list[i].idAlumno+'">'+
                                        '<td>'+list[i].nombre+'</td>'+
                                        '<td>'+list[i].fecha_nacimiento+'</td>'+
                                        '<td>'+list[i].activo+'</td>'+
                                        '<td>'+list[i].sexo+'</td>'+
                                        '<td>'+list[i].fecha_alta+'</td>'+
                                       '</tr>'
                                      );
          }
      }   
    }); // fin de $.getJSON
}

$('#tbAlumnoss').on('click','tr td', function(evt){
   var target,idAlumno,valorSeleccionado;
   target = $(event.target);
   idAlumno = target.parent().data('idalumno');
   valorSeleccionado = target.text();
   alert("Valor Seleccionado: "+valorSeleccionado+"\n idAlumno: "+ target.parent().data('idalumno'));
});