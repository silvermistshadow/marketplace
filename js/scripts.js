$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var yourName = $("input#yourName").val();
    var address = $("input#address").val();
    var wandLength = $("input#wandLength").val();
    var wandWood = $("#wandWood").val();
    var wandCore = $("input:radio[name=wandCore]:checked").val();

    $("#yourNameOut").text(yourName);
    $("#addressOut").text(address);
    $("#wandLengthOut").text(wandLength);
    $("#wandWoodOut").text(wandWood);
    $("#wandCoreOut").text(wandCore);

    $("#confirmPurchase").show();

  });

});
