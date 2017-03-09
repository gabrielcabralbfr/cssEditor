
$(document).ready(function(){
 $("[name='my-checkbox']").bootstrapSwitch('state', false);


});



/**
 *EDIÇÃO DA INFORMAÇÃO
 */

$('#switchEdit').on('switchChange.bootstrapSwitch', function(e, state) {
    $('.text-editor-info').slideToggle();
});

//AO CLICAR PARA EDITAR DA INFORMAÇÃO
   //EXIBE O MENU DE EDIÇÃO
/*$(document).on('switchChange.bootstrapSwitch', function (event, state) {
    if ($(this).bootstrapSwitch('state')) { 
      $('.text-editor-info').slideToggle();
    }
 
    });*/

     $(document).on('click','#switchEdit .edit',function(){
   //EXIBE O MENU DE EDIÇÃO
    $('.text-editor-info').slideToggle();
    });

//QUANDO A TECLA É LIBERADA DO INPUT DO BG
    $(document).on("keyup", "#bgcolor-input", function(){
  //ALTERA-SE A COR DE FUNDO DO 3º PAI DESTE ELEMENTO COM O VALOR DIGITADO
  var color_value = $(this).val();
  $(this).parents(':eq(1)').css({
    "background-color": color_value
  });
});

//QUANDO A TECLA É LIBERADA DO INPUT DO TAMANHO DA FONTE
    $(document).on("keyup", "#size-input", function(){
  var font_size = $(this).val();
  //ALTERA-SE A COR DE FUNDO COM O TAMANHO
  $(this).parents(':eq(1)').css({
    "font-size": font_size 
  });

    $('.editor').css({
    "font-size": '14px'
  });
});


//QUANDO A TECLA É LIBERADA DO INPUT DA COR DO TEXTO
    $(document).on("keyup", "#txtcolor-input", function(){
  var color_value = $(this).val();
  $(this).parents().css({
    "color": color_value
  });
});


//QUANDO A FONTE É SELECIONADA
    $(document).on("click", "#font-select", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(this).parents(':eq(2)').css({
    "font-family": font_value
  });
});

/**
 *    FIM DA EDIÇÃO DA INFORMAÇÃO
 */