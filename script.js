
$(document).ready(function(){
   
});

//AO CLICAR PARA EDITAR DA INFORMAÇÃO
 $(document).on('click','.informacao  .edit',function(){
   //EXIBE O MENU DE EDIÇÃO
       $('.editar-info').slideToggle(800);
       //E JOGA O QUESTIONÁRIO PRA DIREITA
       $('.questionario').css({
           "margin-left": "100%",
           "padding-left": "50px"
           });
    });


//AO CLICAR NO BOTÃO APARENCIA
    $(document).on('click', '.btn-aparencia',function(){
      //EXIBE EDITOR DE APARENCIA
        $('.editor-aparencia').toggle();
    });


//QUANDO A TECLA É LIBERADA DO INPUT DO BG
    $(document).on("keyup", "#bgcolor-input", function(){
  //ALTERA-SE A COR DE FUNDO COM O VALOR DIGITADO
  var color_value = $(this).val();
  $(".informacao").css({
    "background-color": color_value
  });
});

//QUANDO A TECLA É LIBERADA DO INPUT DO TAMANHO DA FONTE
    $(document).on("keyup", "#size-input", function(){
  var font_size = $(this).val();
  //ALTERA-SE A COR DE FUNDO COM O TAMANHO
  $(".informacao").css({
    "font-size": font_size 
  });
});


//QUANDO A TECLA É LIBERADA DO INPUT DA COR DO TEXTO
    $(document).on("keyup", "#txtcolor-input", function(){
  var color_value = $(this).val();
  $(".informacao").css({
    "color": color_value
  });
});


//QUANDO A FONTE É SELECIONADA
    $(document).on("click", "#font-select", function(){
  var font_value = $(this).val();
//ALTERA O PARA O VALOR SELECIONADO
  $(".informacao").css({
    "font-family": font_value
  });
});


