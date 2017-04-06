var main = function () 
{ 
    
    $('.article').click(function() {     
     $('.article').removeClass('current');
     $('.hidden').hide();
        
    $(this).addClass('current');
    $(this).children('.hidden').toggle("slow");   
           
});
 
  $(document).keypress(function(event) {
    if(event.which === 111) {
      $('.hidden').hide();

      $('.current').children('.hidden').toggle("slow");
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
    
  });
};

$(document).ready(main);

