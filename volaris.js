$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    $(document).on('click','#buscador-volaris',function(e){
      e.preventDefault();
    });

    $(document).on('mouseenter','.buscador-volaris',function(){
      $(this).addClass('buscador-volaris-activo');
      $(this).find('input').attr('placeholder','Pregunta a Volaris');
      $(this).find('img').attr('src','img/ic_search_white_24px.png');
    });
    $(document).on('mouseleave','.buscador-volaris',function(){

      if( $(this).find('input').val() === '' ){
          $(this).removeClass('buscador-volaris-activo');
          $(this).find('input').attr('placeholder','');
          $(this).find('input').blur();
          $(this).find('img').attr('src','img/ic_search_black_24px.png');
      }

    });


});
