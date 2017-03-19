$(document).ready(function(){
 $("input[name='switch-editor']").bootstrapSwitch(); //inicializa o switch
});

/*
* ATRIBUI UM SWITCH PARA CADA DIV
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

$(document).on('switchChange.bootstrapSwitch', '#switch-unica', function() {
     $('.editor-unica').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-sel_unica_combo', function() {
     $('.editor-unica-combo').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-sel_multipla', function() {
     $('.editor-multipla').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-sel_multipla_list', function() {
     $('.editor-multipla-list').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-aberta', function() {
     $('.editor-aberta').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-aberta-modelo', function() {
     $('.editor-aberta-modelo').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-unica', function() {
     $('.editor-grade-unica').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-unica-combo', function() {
     $('.editor-grade-unica-combo').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-multipla', function() {
     $('.editor-grade-multipla').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-multipla-list', function() {
     $('.editor-grade-multipla-list').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-aberta', function() {
     $('.editor-grade-aberta').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-aberta-numerica', function() {
     $('.editor-grade-aberta-numerica').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-ranking', function() {
     $('.editor-grade-ranking').slideToggle(800);
});

$(document).on('switchChange.bootstrapSwitch', '#switch-grade-somatorio', function() {
     $('.editor-grade-somatorio').slideToggle(800);
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
    $(document).on("click", ".fonte-tamanho", function(){
     
  var font_size = $(this).val();
  //ALTERA-SE A FONTE DO 2º PAI, INDICE DE INICIO NO 0
  $(this).parents(':eq(1)').css({
    "font-size": font_size + 'px'
  });

//RETORNA O TAMANHO DA FONTE DO EDITOR AO TAMANHO ORIGINAL
    $('.editor').css({
    "font-size": '20px'
  });
   
});



//FONTE
    $(document).on("click", ".fonte-familia", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-family": font_value
  });
});


//ESTILO DA FONTE
    $(document).on("click", ".fonte-estilo", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-style": font_value
  });

//RETORNA O ESTILO DA FONTE DO EDITOR AO ESTILO ORIGINAL
      $('.editor').css({
    "font-style": 'normal'
  });
});

//PESO DA FONTE
    $(document).on("click", ".fonte-peso", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-weight": font_value
  });

//RETORNA O PESO DA FONTE DO EDITOR AO PESO ORIGINAL
      $('.editor').css({
    "font-weight": 'normal'
  });
});

//ALINHAMENTO
    $(document).on("click", "#center-align", function(){
  var alignment = $(this).attr(id);
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "text-align": alignment
  });
  alert(alignment)});