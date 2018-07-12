$(document).ready(function(){
  $(".form1 form").submit(function(event){
    event.preventDefault();                   //preventing default
    var numberString = $("input#add1").val(); //assigning the input to a variable
    var numberSums = numberString.split(","); //splitting the string into an array
    numberSumms = numberSums.map( num1 => {   //turning an array of strings into 1 of integers
      return parseInt(num1);
    })
    var sum = 0;
    var add = numberSumms.map( num =>{        //adding up the numbers in the array
      return sum += num;
    });

    console.log(sum);                         //display the total in the console

    $("#output").text(sum);                   //display the output in the html 


  });

});
