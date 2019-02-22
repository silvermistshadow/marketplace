$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var yourName = $("input#yourName").val();
    var address = $("input#address").val();
    var wandLength = $("input#wandLength").val();
    var wandWood = $("#wandWood").val();
    var wandCore = $("input:radio[name=wandCore]:checked").val();

    

  });

});
