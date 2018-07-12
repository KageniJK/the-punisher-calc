$(document).ready(function(){
  $(".form1 form").submit(function(event){
    event.preventDefault();
    var numberString = $("input#add1").val();
    var numberSums = numberString.split(",");
    numberSumms = numberSums.map( num1 => {
      return parseInt(num1);
    })
    var sum = 0;
    var add = numberSumms.map( num =>{
      return sum += num;
    });

    console.log(sum);


  });

});
