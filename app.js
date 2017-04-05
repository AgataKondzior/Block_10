var main = function () 
{ 
    
    $(".active").click(function()
{     
    
        
    $(".description").hide();  
    $(".current").show();
    
    var currentArticle = $(".current");  
    var nextArticle = currentArticle.next();  
        
    currentArticle.removeClass("current");
    nextArticle.addClass("current");
        
    
           
});
 
};

$(document).ready(main);

