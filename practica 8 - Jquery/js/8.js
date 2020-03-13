$(document).ready(function(){


  $(document).ready(function(){
    $('.modal').modal();
  });

$("#btn_peticion").click(function(){
  $.ajax({
    url: "peticion.php",
    data: {id:3},
    type: "POST",
    dataType: "json",
    success: function(respuesta){
        alert(respuesta.texto + " " + respuesta.resultado);
    }
  });
});

  $('.dropdown-trigger').dropdown({
  //  hover: true,
    inDuration: 500,
    outDuration: 500,
    constrainWidth: true
  });

//contenido externo
  $("#ext").click(function() {

      var esperar = 2000;

      $.ajax({
        url: "externo.html",
        beforeSend: function(){
          $("#contenido").text('Cargando ...');
        },

        success: function(data){
          setTimeout(function(){
            $("#contenido").html(data);
          }, esperar
        );
      }

      });

  });

  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 4000);


  $('.materialboxed').materialbox();

  $("#btn_fade").click(function(){
    $("#div1").fadeToggle(3000);
  });

  $("#btn_color").click(function(){
    $("#div1").css("background-color", "blue" );
  });


  $("#btn_animate").click(function(){
    $("#div1").animate({
        //height: '200px'
          opacity: '0.5',
       });
  });


});
