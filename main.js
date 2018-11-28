$(document).ready(function(){

  $("#input").keypress(function(event){
    if(event.keyCode == 13){
      var searchTerm = $("#input").val();
    }
  })


  $.ajax.({ 
      "url": "https://api.funtranslations.com/translate/dothraki.json?",
       "type": "GET",
        "dataType": "JSON",
        "data": "text",{
          "q": "searchTerm",
        },

        success:function(data){
         



        error: function(data, textStatus, errorThrown) {
          
              console.log("whomp, whomp")
                console.log(errorThrown);
        }
  },
    
    
      




      