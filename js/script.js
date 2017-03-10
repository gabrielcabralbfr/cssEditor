
$(document).ready(function(){
 $("input[name='switch-editor']").bootstrapSwitch(); //inicializa o switch
});

/*
* ATRIBUI UM SWITCH PARA CADA DIV -- INCOMPLETO
*/
$(document).on('switchChange.bootstrapSwitch', '#switch-idioma', function() {
   $('.editar-idioma').slideToggle(800);
});


$(document).on('switchChange.bootstrapSwitch', '#switch-informacao', function() {
     $('.editor-info').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-agrupador', function() {
     $('.editor-agrupador').slideToggle(800);
});


/*
* FIM ATRIBUI UM SWITCH PARA CADA DIV
*/


//BACKGROUND COLOR
    $(document).on("keyup", "#bgcolor-input", function(){
  //ALTERA-SE A COR DE FUNDO DO 3º PAI DESTE ELEMENTO COM O VALOR DIGITADO
  var color_value = $(this).val();
  $(this).parents(':eq(1)').css({
    "background-color": color_value
  });
});



//COR DO TEXTO
    $(document).on("keyup", "#txtcolor-input", function(){
  var color_value = $(this).val();
  $(this).parents().css({
    "color": color_value
  });
  //RETORNA A COR DA FONTE DO EDITOR A COR ORIGINAL
      $('.editor').css({
    "color": '#333'
  });
});



//TAMANHO DA FONTE
    $(document).on("click", ".size-font", function(){
     
  var font_size = $(this).val();
  //ALTERA-SE A FONTE DO 2º PAI, INDICE DE INICIO NO 0
  $(this).parents(':eq(1)').css({
    "font-size": font_size + 'px'
  });

//RETORNA O TAMANHO DA FONTE DO EDITOR AO TAMANHO ORIGINAL
    $('.editor').css({
    "font-size": '18px'
  });
   console.log(font_size);
});



//FONTE
    $(document).on("click", ".font-family", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-family": font_value
  });
});


//ESTILO DA FONTE
    $(document).on("click", ".estilo-font", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-style": font_value
  });

//RETORNA O TAMANHO DA FONTE DO EDITOR AO TAMANHO ORIGINAL
      $('.editor').css({
    "font-style": 'normal'
  });
});

//PESO DA FONTE
    $(document).on("click", ".peso-font", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-weight": font_value
  });

//RETORNA O TAMANHO DA FONTE DO EDITOR AO TAMANHO ORIGINAL
      $('.editor').css({
    "font-weight": 'normal'
  });
});

//ALINHAMENTO
    $(document).on("click", "div.alignment", function(){
  var alignment = $(this).attr(id);
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "text-align": alignment
  });
  alert(alignment);
});