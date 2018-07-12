$(document).ready(function(){
  $(".form1 form").submit(function(event){
    event.preventDefault();
    var numberString = $("input#add1").val();
    var numberArray = numberString.split(",");
    console.log(numberArray);


  });

});
