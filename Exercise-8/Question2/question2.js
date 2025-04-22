// This code is written by Tarun Chebolu 23BCE1016
function alertOnLoad()
{
    var age = parseInt(prompt("What is your Age??", "18"));

    if (age < 18){
        alert("You are not eligible for Driving!!");
    }else{
        alert("You are eligible to Drive!!");
    }
    
}